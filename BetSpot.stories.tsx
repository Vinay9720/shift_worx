import React, { useEffect, useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BetSpot, BetSpotLayout } from './BetSpot';
import { Bets } from '../../../../config/bets';
import { BlockReason } from '../../../gameGrid/hooks';
import type { BetSpotProps, BetSpotLayoutProps } from '../../types/types';

// Mock chip components for visual representation
const MockChip = ({ value, type = 'normal' }: { value: number; type?: 'normal' | 'win' | 'flying' }) => (
  <div
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: type === 'win' ? 'linear-gradient(45deg, #ffd700, #ffed4e)' : 
                  type === 'flying' ? 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' :
                  'linear-gradient(45deg, #4ecdc4, #44a08d)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '12px',
      border: '2px solid rgba(255,255,255,0.3)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    }}
  >
    {value > 0 ? `$${value}` : ''}
  </div>
);

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

const meta: Meta<typeof BetSpot> = {
  title: 'Game/BetSpot',
  component: BetSpot,
  decorators: [centerDecorator],
  parameters: {
    controls: { expanded: true },
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
  argTypes: {
    betSpot: {
      control: 'select',
      options: [Bets.MainBet, Bets.TwentyOnePlusThree, Bets.BustBonus, Bets.CrazySeven, Bets.PerfectPair],
    },
    value: { control: { type: 'number', min: 0, max: 1000, step: 5 } },
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
};

export default meta;
type Story = StoryObj<typeof BetSpot>;

// Base props for reusability
const baseProps: Partial<BetSpotProps> = {
  onBet: (betSpot: Bets) => console.log(`Bet placed on ${betSpot}`),
  chip: <MockChip value={25} />,
  winChip: <MockChip value={50} type="win" />,
  flyingChip: <MockChip value={25} type="flying" />,
  betSpotRef: { current: null },
  chipRef: { current: null },
  betspotParentRef: { current: null },
  checkTooltip: (betSpot: Bets) => console.log(`Tooltip check for ${betSpot}`),
  onMouseLeave: () => console.log('Mouse leave'),
  blockedStatus: mockBlockedStatus.normal,
  isTouchDevice: false,
};

export const MainBetSpot: Story = {
  name: 'Main Bet Spot - Empty',
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 0,
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
  },
};

export const MainBetWithChip: Story = {
  name: 'Main Bet Spot - With Chip',
  args: {
    ...MainBetSpot.args,
    value: 25,
    delayValue: 25,
    chip: <MockChip value={25} />,
  },
};

export const SideBetEmpty: Story = {
  name: 'Side Bet - 21+3 Empty',
  args: {
    ...baseProps,
    betSpot: Bets.TwentyOnePlusThree,
    value: 0,
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
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
  },
};

export const SideBetWithChip: Story = {
  name: 'Side Bet - 21+3 With Chip',
  args: {
    ...SideBetEmpty.args,
    value: 10,
    delayValue: 10,
    chip: <MockChip value={10} />,
  },
};

export const WinningBetSpot: Story = {
  name: 'Winning Bet Spot',
  render: (args) => {
    const [showWin, setShowWin] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => setShowWin(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'white', marginBottom: 20 }}>
          {showWin ? 'Winner! 🎉' : 'Placing bet...'}
        </h3>
        <BetSpot
          {...args}
          win={showWin}
          winValue={showWin ? 100 : 0}
          winChip={<MockChip value={100} type="win" />}
        />
      </div>
    );
  },
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 25,
    delayValue: 25,
    winValue: 100,
    win: false,
    disabled: false,
    isBetsOpenStatus: false,
    winAmount: 100,
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
    chip: <MockChip value={25} />,
  },
};

export const FlyingChipAnimation: Story = {
  name: 'Flying Chip Animation',
  render: (args) => {
    const [chipValue, setChipValue] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setChipValue(prev => prev + 25);
      }, 1500);
      
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'white', marginBottom: 20 }}>
          Flying Chip Animation - Total: ${chipValue}
        </h3>
        <BetSpot
          {...args}
          value={chipValue}
          delayValue={chipValue}
          flyingChip={<MockChip value={25} type="flying" />}
        />
      </div>
    );
  },
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 0,
    delayValue: 0,
    winValue: 0,
    win: false,
    disabled: false,
    isBetsOpenStatus: true,
    initialMainBet: 0,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
  },
};

export const DisabledBetSpot: Story = {
  name: 'Disabled Bet Spot',
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 0,
    delayValue: 0,
    winValue: 0,
    win: false,
    disabled: true,
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
  },
};

export const BlockedLowBalance: Story = {
  name: 'Blocked - Low Balance',
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 0,
    delayValue: 0,
    winValue: 0,
    win: false,
    disabled: false,
    isBetsOpenStatus: true,
    blockedStatus: mockBlockedStatus.lowBalance,
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
  },
};

export const DragAndDropStates: Story = {
  name: 'Drag and Drop States',
  render: (args) => {
    const [dragState, setDragState] = useState<'normal' | 'draggedFrom' | 'dragging'>('normal');
    
    useEffect(() => {
      const states: Array<'normal' | 'draggedFrom' | 'dragging'> = ['normal', 'draggedFrom', 'dragging'];
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % states.length;
        setDragState(states[currentIndex]);
      }, 2000);
      
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'white', marginBottom: 20 }}>
          Drag State: {dragState.toUpperCase()}
        </h3>
        <BetSpot
          {...args}
          isDraggedFrom={dragState === 'draggedFrom'}
          isDragging={dragState === 'dragging'}
        />
      </div>
    );
  },
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 25,
    delayValue: 25,
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
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
    chip: <MockChip value={25} />,
  },
};

export const UndoAnimation: Story = {
  name: 'Undo Animation',
  render: (args) => {
    const [isUndo, setIsUndo] = useState(false);
    const [value, setValue] = useState(75);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsUndo(true);
        setValue(50);
      }, 1000);
      
      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'white', marginBottom: 20 }}>
          {isUndo ? 'Undo Triggered - Chip Returning' : 'Normal State'}
        </h3>
        <BetSpot
          {...args}
          value={value}
          delayValue={value}
          isUndoTriggered={isUndo}
          flyingChip={<MockChip value={25} type="flying" />}
        />
      </div>
    );
  },
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 75,
    delayValue: 75,
    winValue: 0,
    win: false,
    disabled: false,
    isBetsOpenStatus: true,
    isUndoTriggered: false,
    clearAnimations: false,
    isAllSideBetsHover: false,
    winAmount: 0,
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
    chip: <MockChip value={75} />,
  },
};

export const CashoutScenario: Story = {
  name: 'Cashout Scenario',
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 25,
    delayValue: 25,
    winValue: 0,
    win: false,
    disabled: false,
    isBetsOpenStatus: false,
    isDraggedFrom: false,
    isDragging: false,
    isUndoTriggered: false,
    clearAnimations: false,
    isAllSideBetsHover: false,
    winAmount: 0,
    initialMainBet: 25,
    h0Cashout: 37.5, // 1.5x cashout
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: true,
    isSplitTriggered: false,
    isDoubled: false,
    chip: <MockChip value={25} />,
    winChip: <MockChip value={37.5} type="win" />,
  },
};

export const DoubleBetScenario: Story = {
  name: 'Double Bet Scenario',
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 50, // Doubled from 25
    delayValue: 50,
    winValue: 100,
    win: true,
    disabled: false,
    isBetsOpenStatus: false,
    isDraggedFrom: false,
    isDragging: false,
    isUndoTriggered: false,
    clearAnimations: false,
    isAllSideBetsHover: false,
    winAmount: 100,
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: true,
    isSplitTriggered: false,
    isDoubled: true,
    chip: <MockChip value={50} />,
    winChip: <MockChip value={100} type="win" />,
  },
};

export const SplitScenario: Story = {
  name: 'Split Scenario',
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    value: 50, // Split creates additional bet
    delayValue: 50,
    winValue: 100,
    win: true,
    disabled: false,
    isBetsOpenStatus: false,
    isDraggedFrom: false,
    isDragging: false,
    isUndoTriggered: false,
    clearAnimations: false,
    isAllSideBetsHover: false,
    winAmount: 100,
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: true,
    isSplitTriggered: true,
    isDoubled: false,
    chip: <MockChip value={50} />,
    winChip: <MockChip value={100} type="win" />,
  },
};

export const AllSideBetsComparison: Story = {
  name: 'All Side Bet Types',
  render: (args) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '40px',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: 'white', marginBottom: 10 }}>21+3</h4>
        <BetSpot
          {...args}
          betSpot={Bets.TwentyOnePlusThree}
          value={10}
          delayValue={10}
          chip={<MockChip value={10} />}
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: 'white', marginBottom: 10 }}>Bust Bonus</h4>
        <BetSpot
          {...args}
          betSpot={Bets.BustBonus}
          value={15}
          delayValue={15}
          chip={<MockChip value={15} />}
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: 'white', marginBottom: 10 }}>Crazy 7</h4>
        <BetSpot
          {...args}
          betSpot={Bets.CrazySeven}
          value={5}
          delayValue={5}
          chip={<MockChip value={5} />}
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: 'white', marginBottom: 10 }}>Perfect Pair</h4>
        <BetSpot
          {...args}
          betSpot={Bets.PerfectPair}
          value={20}
          delayValue={20}
          chip={<MockChip value={20} />}
        />
      </div>
    </div>
  ),
  args: {
    ...baseProps,
    win: false,
    disabled: false,
    isBetsOpenStatus: true,
    initialMainBet: 25,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
  },
};

export const BetSpotLayoutOnly: Story = {
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

export const InteractivePlayground: Story = {
  name: 'Interactive Playground',
  render: (args) => {
    const [betState, setBetState] = useState({
      value: 0,
      isWinning: false,
      isDisabled: false,
      isBlocked: false,
    });

    const placeBet = () => {
      setBetState(prev => ({ 
        ...prev, 
        value: prev.value + 25 
      }));
    };

    const triggerWin = () => {
      setBetState(prev => ({ 
        ...prev, 
        isWinning: true 
      }));
      
      setTimeout(() => {
        setBetState(prev => ({ 
          ...prev, 
          isWinning: false 
        }));
      }, 4000);
    };

    const reset = () => {
      setBetState({
        value: 0,
        isWinning: false,
        isDisabled: false,
        isBlocked: false,
      });
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ color: 'white', marginBottom: 15 }}>
            Interactive BetSpot - Current Bet: ${betState.value}
          </h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: 20 }}>
            <button 
              onClick={placeBet}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4ecdc4',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Place $25 Bet
            </button>
            <button 
              onClick={triggerWin}
              disabled={betState.value === 0}
              style={{
                padding: '8px 16px',
                backgroundColor: betState.value === 0 ? '#666' : '#ffd700',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: betState.value === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              Trigger Win
            </button>
            <button 
              onClick={reset}
              style={{
                padding: '8px 16px',
                backgroundColor: '#ff6b6b',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
          </div>
        </div>
        
        <BetSpot
          {...args}
          value={betState.value}
          delayValue={betState.value}
          win={betState.isWinning}
          winValue={betState.isWinning ? betState.value * 2 : 0}
          disabled={betState.isDisabled}
          chip={betState.value > 0 ? <MockChip value={betState.value} /> : <MockChip value={0} />}
          winChip={<MockChip value={betState.value * 2} type="win" />}
          flyingChip={<MockChip value={25} type="flying" />}
          onBet={() => placeBet()}
        />
      </div>
    );
  },
  args: {
    ...baseProps,
    betSpot: Bets.MainBet,
    isBetsOpenStatus: true,
    initialMainBet: 0,
    h0Cashout: 0,
    h1Cashout: 0,
    isPlayerSpecialDecisionMade: false,
    isSplitTriggered: false,
    isDoubled: false,
  },
};