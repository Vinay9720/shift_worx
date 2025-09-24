import React, { useEffect, useState, useRef } from 'react';
import { Provider } from 'react-redux';
import { getChipFromValue } from '@pp/core/src/utils/chips';
import { useArgs } from 'storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Bets } from '../../../../config/bets';
import { ChipHoverConnected } from '../../../chips/ChipHoverConnected';
import { BetSpot, BetSpotLayout } from './BetSpot';
import { BlockReason } from '../../../gameGrid/hooks';
import type { BetSpotProps, BetSpotLayoutProps } from '../../types/types';
import '../../../../styles/main.css';
import { GameStore } from '../../../../store/GameStore';

const { value: defaultChipValue, weight } = getChipFromValue([], 0);
const minChipValue = 0.2;
const TILT_VALUE = 0.66;

// Utility function for value calculation
const valueFixed = (value1: number, value2: number): number => (value1 * 10 + value2 * 10) / 10;

// Mock blocked status for different scenarios
const mockBlockedStatus = {
  normal: { blocked: false, reason: undefined, message: '', attr: [] },
  lowBalance: { 
    blocked: true, 
    reason: BlockReason.LowBalance, 
    message: 'Insufficient balance', 
    attr: [] 
  },
  minLimit: { 
    blocked: true, 
    reason: BlockReason.MinLimit, 
    message: 'Below minimum bet', 
    attr: [] 
  },
  maxLimit: { 
    blocked: true, 
    reason: BlockReason.MaxTableLimit, 
    message: 'Exceeds table limit', 
    attr: [] 
  },
  tooltip: { 
    blocked: true, 
    reason: BlockReason.ToolTipForBetspot, 
    message: 'Place main bet first', 
    attr: [] 
  },
};

// Center decorator for consistent layout
const centerDecorator = (Story: any) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #0f4c75, #3282b8)',
      padding: '20px',
    }}
  >
    <div style={{ 
      background: 'radial-gradient(circle, rgba(0,100,0,0.3) 0%, rgba(0,50,0,0.8) 100%)',
      padding: '40px',
      borderRadius: '20px',
      border: '2px solid rgba(255,255,255,0.1)',
    }}>
      <Story />
    </div>
  </div>
);

// BetSpot configuration for different positions
const betSpotConfigs = {
  1: { betSpot: Bets.BustBonus, style: { width: '115px', height: '64px', top: '0px', fontSize: '15px' } },
  2: { betSpot: Bets.TwentyOnePlusThree, style: { width: '115px', height: '64px', top: '40px', fontSize: '15px' } },
  3: { betSpot: Bets.MainBet, style: { width: '154px', height: '85px', top: '40px', fontSize: '25px' } },
  4: { betSpot: Bets.PerfectPair, style: { width: '115px', height: '64px', top: '40px', fontSize: '15px' } },
  5: { betSpot: Bets.CrazySeven, style: { width: '115px', height: '64px', top: '0px', fontSize: '15px' } },
};

const getParentStyle = (number: number) => ({
  position: 'relative' as const,
  ...betSpotConfigs[number]?.style,
  transform: 'rotateX(50deg)',
});

const meta: Meta<typeof BetSpot> = {
  title: 'Game/BetSpot',
  component: BetSpot,
  args: {
    betSpot: Bets.MainBet,
    onBet: fn(),
    value: defaultChipValue,
    delayValue: 0,
    winValue: 0,
    win: false,
    disabled: false,
    isBetsOpenStatus: true,
    isDraggedFrom: false,
    isDragging: false,
    isUndoTriggered: false,
    clearAnimations: false,
    isAllSideBetsHover: false,
    winAmount: 0,
    initialMainBet: 0,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
    isTouchDevice: false,
    blockedStatus: mockBlockedStatus.normal,
  },
  argTypes: {
    betSpot: {
      control: 'select',
      options: [Bets.MainBet, Bets.TwentyOnePlusThree, Bets.BustBonus, Bets.CrazySeven, Bets.PerfectPair],
    },
    value: {
      control: {
        type: 'number',
        min: 0,
        step: minChipValue,
      },
    },
    delayValue: { control: { type: 'number', min: 0, max: 1000, step: 5 } },
    winValue: { control: { type: 'number', min: 0, max: 5000, step: 10 } },
    winAmount: { control: { type: 'number', min: 0, max: 10000, step: 10 } },
    win: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isBetsOpenStatus: { control: 'boolean' },
    isDraggedFrom: { control: 'boolean' },
    isDragging: { control: 'boolean' },
    isUndoTriggered: { control: 'boolean' },
    clearAnimations: { control: 'boolean' },
    isAllSideBetsHover: { control: 'boolean' },
    isPlayerSpecialDecisionMade: { control: 'boolean' },
    isSplitTriggered: { control: 'boolean' },
    isDoubled: { control: 'boolean' },
    isTouchDevice: { control: 'boolean' },
  },
  parameters: {
    controls: {
      expanded: true,
      exclude: /^(is|on)[A-Z].*|Ref$|clickSound|locale/,
    },
    layout: 'centered',
    backgrounds: {
      default: 'casino',
      values: [
        { name: 'casino', value: 'linear-gradient(135deg, #0f4c75, #3282b8)' },
        { name: 'dark', value: '#222' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BetSpot>;

export const Single: Story = {
  name: 'Single BetSpot',
  render: (args, { globals: { locale } }) => {
    const [{ value }, updateArgs] = useArgs();

    const chip = (
      <ChipHoverConnected
        size="grow"
        value={value}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={value <= 0}
        betCode={args.betSpot}
        type={undefined}
        id="mainchip"
      />
    );

    const winChip = (
      <ChipHoverConnected
        size="grow"
        value={value * 2}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={false}
        betCode={args.betSpot}
        type={undefined}
        id="winchip"
      />
    );

    const flyingChip = (
      <ChipHoverConnected
        size="grow"
        value={minChipValue}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={false}
        betCode={args.betSpot}
        type={undefined}
        id="flyingchip"
      />
    );

    return (
      <Provider store={GameStore}>
        <div
          data-testid="bet-spot-wrapper"
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div style={getParentStyle(2)}>
            <BetSpot
              {...args}
              value={value}
              delayValue={value}
              chip={chip}
              winChip={winChip}
              flyingChip={flyingChip}
              onBet={() => updateArgs({ value: valueFixed(minChipValue, value) })}
              betSpotRef={{ current: null }}
              chipRef={{ current: null }}
              betspotParentRef={{ current: null }}
              checkTooltip={() => {}}
              onMouseLeave={() => {}}
            />
          </div>
        </div>
      </Provider>
    );
  },
};

export const All: Story = {
  name: 'All BetSpots',
  args: {
    value: 1000,
  },
  parameters: {
    controls: {
      exclude: /^(is|on)[A-Z].*|Ref$|bet|chipPlacement|clickSound|locale|multiplier/,
    },
  },
  render: (args, { globals: { locale } }) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);

    const betSpotNumbers = [1, 2, 3, 4, 5] as const;

    const getChipValues = (number: number): number => {
      switch (number) {
        case 1: return value1;
        case 2: return value2;
        case 3: return value3;
        case 4: return value4;
        case 5: return value5;
        default: return 0;
      }
    };

    const setChipValues = (number: number) => {
      switch (number) {
        case 1: return setValue1;
        case 2: return setValue2;
        case 3: return setValue3;
        case 4: return setValue4;
        case 5: return setValue5;
        default: return setValue1;
      }
    };

    const getBetSpotConfig = (number: number) => betSpotConfigs[number];

    const createChip = (number: number) => (
      <ChipHoverConnected
        size="grow"
        value={getChipValues(number)}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={getChipValues(number) <= 0}
        betCode={getBetSpotConfig(number)?.betSpot}
        type={undefined}
        id={`chip-${number}`}
      />
    );

    const createWinChip = (number: number) => (
      <ChipHoverConnected
        size="grow"
        value={getChipValues(number) * 2}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={false}
        betCode={getBetSpotConfig(number)?.betSpot}
        type={undefined}
        id={`winchip-${number}`}
      />
    );

    const createFlyingChip = (number: number) => (
      <ChipHoverConnected
        size="grow"
        value={minChipValue}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={false}
        betCode={getBetSpotConfig(number)?.betSpot}
        type={undefined}
        id={`flyingchip-${number}`}
      />
    );

    return (
      <Provider store={GameStore}>
        <div
          data-testid="bet-spot-wrapper-parent"
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            data-testid="bet-spot-wrapper"
            style={{
              display: 'grid',
              gap: 14,
              gridTemplateColumns: 'repeat(5, 1fr)',
              width: '600px',
            }}
          >
            {betSpotNumbers.map((number) => (
              <div key={number} style={getParentStyle(number)}>
                <BetSpot
                  {...args}
                  betSpot={getBetSpotConfig(number)?.betSpot || Bets.MainBet}
                  value={getChipValues(number)}
                  delayValue={getChipValues(number)}
                  chip={createChip(number)}
                  winChip={createWinChip(number)}
                  flyingChip={createFlyingChip(number)}
                  onBet={() => setChipValues(number)(valueFixed(minChipValue, getChipValues(number)))}
                  betSpotRef={{ current: null }}
                  chipRef={{ current: null }}
                  betspotParentRef={{ current: null }}
                  checkTooltip={() => {}}
                  onMouseLeave={() => {}}
                  blockedStatus={mockBlockedStatus.normal}
                />
              </div>
            ))}
          </div>
        </div>
      </Provider>
    );
  },
};

export const WinningAnimation: Story = {
  name: 'Winning Animation',
  render: (args, { globals: { locale } }) => {
    const [showWin, setShowWin] = useState(false);
    const chipValue = 25;
    
    useEffect(() => {
      const timer = setTimeout(() => setShowWin(true), 1000);
      return () => clearTimeout(timer);
    }, []);

    const chip = (
      <ChipHoverConnected
        size="grow"
        value={chipValue}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={false}
        betCode={Bets.MainBet}
        type={undefined}
        id="mainchip"
      />
    );

    const winChip = (
      <ChipHoverConnected
        size="grow"
        value={chipValue * 2}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={false}
        betCode={Bets.MainBet}
        type={undefined}
        id="winchip"
      />
    );

    return (
      <Provider store={GameStore}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>
            {showWin ? 'Winner! 🎉' : 'Placing bet...'}
          </h3>
          <div style={getParentStyle(3)}>
            <BetSpot
              {...args}
              betSpot={Bets.MainBet}
              value={chipValue}
              delayValue={chipValue}
              win={showWin}
              winValue={showWin ? chipValue * 2 : 0}
              chip={chip}
              winChip={winChip}
              flyingChip={chip}
              onBet={() => {}}
              betSpotRef={{ current: null }}
              chipRef={{ current: null }}
              betspotParentRef={{ current: null }}
              checkTooltip={() => {}}
              onMouseLeave={() => {}}
              blockedStatus={mockBlockedStatus.normal}
            />
          </div>
        </div>
      </Provider>
    );
  },
};

export const BlockedStates: Story = {
  name: 'Blocked States',
  render: (args, { globals: { locale } }) => {
    const chip = (
      <ChipHoverConnected
        size="grow"
        value={0}
        weight={weight}
        tilt={TILT_VALUE}
        locale={locale}
        hoverConfig={true}
        betCode={Bets.MainBet}
        type={undefined}
        id="mainchip"
      />
    );

    const blockedStates = [
      { name: 'Low Balance', status: mockBlockedStatus.lowBalance },
      { name: 'Min Limit', status: mockBlockedStatus.minLimit },
      { name: 'Max Limit', status: mockBlockedStatus.maxLimit },
      { name: 'Tooltip', status: mockBlockedStatus.tooltip },
    ];

    return (
      <Provider store={GameStore}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '30px',
          alignItems: 'center'
        }}>
          {blockedStates.map(({ name, status }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'white', marginBottom: 10 }}>{name}</h4>
              <div style={getParentStyle(3)}>
                <BetSpot
                  {...args}
                  betSpot={Bets.MainBet}
                  value={0}
                  delayValue={0}
                  chip={chip}
                  winChip={chip}
                  flyingChip={chip}
                  blockedStatus={status}
                  onBet={() => {}}
                  betSpotRef={{ current: null }}
                  chipRef={{ current: null }}
                  betspotParentRef={{ current: null }}
                  checkTooltip={() => {}}
                  onMouseLeave={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      </Provider>
    );
  },
};

export const LayoutComponent: Story = {
  name: 'BetSpot Layout Component',
  render: (args) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '30px',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: 'white', marginBottom: 10 }}>Normal State</h4>
        <BetSpotLayout
          betSpot={Bets.TwentyOnePlusThree}
          disabled={false}
          isWin={false}
          playFallingChip={() => console.log('Normal falling chip')}
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: 'white', marginBottom: 10 }}>Winning State</h4>
        <BetSpotLayout
          betSpot={Bets.TwentyOnePlusThree}
          disabled={false}
          isWin={true}
          playFallingChip={() => console.log('Win falling chip')}
        />
      </div>
    </div>
  ),
};