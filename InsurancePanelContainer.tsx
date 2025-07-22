import { useCallback, useState, useEffect, useRef } from 'react';

import { useAudioTrigger } from '@pp/core/src/controllers/audioController/hooks';
import { L10nText } from '@pp/core/src/services/uiTranslations/reactBindings/L10nText';
import { useBetSlice } from '@pp/core/src/store/slices/bets/selectors';
import { useBonusPromotionsSlice } from '@pp/core/src/store/slices/bonusPromotions/selectors';
import { useChipSlice } from '@pp/core/src/store/slices/chips/selectors';
import { ChipTypes } from '@pp/core/src/store/slices/chips/types';
import { useConfigSlice } from '@pp/core/src/store/slices/config/selectors';
import { useGameStateSlice } from '@pp/core/src/store/slices/game/selectors';
import { gameStateActions } from '@pp/core/src/store/slices/game/slice';
import { GameStatus } from '@pp/core/src/store/slices/game/types';

import { Bets } from '../../config/bets';
import { GameCommunicationPlayerInsuranceSender } from '../../controllers/gameCommunication/senders';
import { DecisionTypes } from '../../core/decisionPanel/decisionButtons/types';
import DecisionPanel from '../../core/decisionPanel/DecisionPanel';
import { useGameDispatch } from '../../store/GameStore';
import { useOnebjStateSlice } from '../../store/slices/onebjState/selectors';
import { onebjStateActions } from '../../store/slices/onebjState/slice';

import InsuranceNoIcon from './insuranceIcons/InsuranceNo/InsuranceNoIcon';
import InsuranceYesIcon from './insuranceIcons/InsuranceYes/InsuranceYesIcon';

const sender = new GameCommunicationPlayerInsuranceSender();

export const InsurancePanelContainer = ({ className = '' }): React.ReactElement | null => {
  const timings = useConfigSlice.getTimings();
  const [decision, setDecision] = useState<string>('');
  const dispatch = useGameDispatch();

  const audioTrigger = useAudioTrigger();
  const [animationDuration, setAnimationDuration] = useState<number>(0);
  const insuranceOfferTimer = useOnebjStateSlice.getInsuranceOfferTimer();
  const insuranceOfferTimerStartTime = useOnebjStateSlice.getInsuranceOfferTimerStartTime();
  const [counter, setCounter] = useState(insuranceOfferTimer);

  // Add ref to track the interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const statsInsuranceInfo = useOnebjStateSlice.getInsuranceStatsInfo();
  const [showLabel, setShowLabel] = useState<boolean>(true);
  const bets = useBetSlice.bets();
  const MainBetSpotValue = bets?.betSpots?.[Bets.MainBet]?.value ?? 0;
  const selectedChip = useChipSlice.getSelectedChip();
  const betType = useBetSlice.getPlacedBetType() || selectedChip.type;
  const isFreeChipSelected = betType === ChipTypes.FreeChip;
  const balance = useGameStateSlice.getDeductibleBalance();
  const freeChipBalance = useBonusPromotionsSlice.getFreeChipBalance();
  const maxFreeBetLimit = useBonusPromotionsSlice.getMaxFreeBetLimit();
  const totalbet = useBetSlice.totalBet();
  const requiredBet = MainBetSpotValue / 2;

  const isEnabled = isFreeChipSelected
    ? freeChipBalance >= requiredBet && requiredBet + totalbet <= maxFreeBetLimit
    : balance >= requiredBet;
  const hasAnyStatValue =
    statsInsuranceInfo &&
    ['insuranceRejectedPercentage', 'insuranceAcceptedPercentage'].some((key) => {
      const value = statsInsuranceInfo[key as keyof typeof statsInsuranceInfo];
      return typeof value === 'number' && !isNaN(value) && value > 0;
    });

  const startTimer = useCallback((): void => {
    if (timings) {
      const elapsedMilliSeconds = Date.now() - insuranceOfferTimerStartTime;
      const timerInMilliseconds = insuranceOfferTimer * 1_000;
      const animationDuration = Math.round(timerInMilliseconds - elapsedMilliSeconds);
      setAnimationDuration(animationDuration);

      if (insuranceOfferTimer > 0) {
        audioTrigger.play({ name: 'playerTurn' });
      }
    }
  }, [timings, insuranceOfferTimer, insuranceOfferTimerStartTime]);

  const startCountdown = useCallback((): void => {
    // Clear any existing interval before creating a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    let currentTime = insuranceOfferTimer;
    setCounter(currentTime);
    
    if (decision) {
      return;
    }

    intervalRef.current = setInterval(() => {
      console.log('Insurance decision timer ended', intervalRef.current);
      if (currentTime > 2) {
        currentTime--;
        setCounter(currentTime);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        if (!decision) {
          sender.dispatch('n');
          setDecision('no');
        }
        setCounter(currentTime);
      }
    }, 1_000);
  }, [insuranceOfferTimer, decision]);

  useEffect(() => {
    startTimer();
    startCountdown();

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [startTimer, startCountdown]);

  useEffect(() => {
    if (counter <= 3 || counter > 10) {
      setShowLabel(true);
      return;
    }
    if (insuranceOfferTimer) {
      if (hasAnyStatValue) {
        setShowLabel(false);
      }
    } else {
      setShowLabel(true);
    }
  }, [counter, hasAnyStatValue, insuranceOfferTimer]);

  const handleDecisionClick = (insuranced: string): void => {
    // Clear the interval when a decision is made
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    audioTrigger.play({ name: 'menuClick' });
    if (insuranced === DecisionTypes.INSURANCE_YES) {
      audioTrigger.play({ name: 'chipClick' });
      sender.dispatch('y');
    } else {
      sender.dispatch('n');
    }

    setDecision(insuranced);
    dispatch(gameStateActions.setCurrentGameStatus(GameStatus.Dealing));
  };

  return (
    <DecisionPanel
      decisionPanelStylesClassName={className}
      decision={decision}
      showDecisionPanel={true}
      timerDuration={animationDuration}
      onDecisionPanelClose={() => {
        // Clear the interval when the panel is closed
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        dispatch(onebjStateActions.setShowDecisionPanel(false));
        dispatch(onebjStateActions.setInsuranceOfferTimer(0));
      }}
    >
      <InsuranceYesIcon
        onDecisionButtonClick={handleDecisionClick}
        showLabel={showLabel}
        statsValue={statsInsuranceInfo?.insuranceAcceptedPercentage}
        isDisabled={!isEnabled}
      />
      <InsuranceNoIcon
        onDecisionButtonClick={handleDecisionClick}
        showLabel={showLabel}
        statsValue={statsInsuranceInfo?.insuranceRejectedPercentage}
      />
      <span>
        <L10nText tk={'INSURANCE_STATUS_CAPS'} />
      </span>
    </DecisionPanel>
  );
};