'use client';

import { useState } from 'react';
import WelcomeBonus from './WelcomeBonus';
import BonusSuccess from './BonusSuccess';
import BonusBalance from './BonusBalance';
import WalletUpdated from './WalletUpdated';
import { NoDepositBonusModal } from '../components/NoDepositBonusModal';

export default function BonusDemo() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'success' | 'balance' | 'wallet'>('welcome');
  const [showNoDepositModal, setShowNoDepositModal] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Screen Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 flex gap-2 overflow-x-auto" style={{
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 255, 159, 0.2)'
      }}>
        <button
          onClick={() => setCurrentScreen('welcome')}
          className="px-4 py-2 rounded-lg font-semibold text-xs whitespace-nowrap"
          style={{
            background: currentScreen === 'welcome' ? '#00FF9F' : 'rgba(255, 255, 255, 0.1)',
            color: currentScreen === 'welcome' ? '#000000' : '#FFFFFF'
          }}
        >
          Welcome Bonus
        </button>
        <button
          onClick={() => setCurrentScreen('success')}
          className="px-4 py-2 rounded-lg font-semibold text-xs whitespace-nowrap"
          style={{
            background: currentScreen === 'success' ? '#00FF9F' : 'rgba(255, 255, 255, 0.1)',
            color: currentScreen === 'success' ? '#000000' : '#FFFFFF'
          }}
        >
          Success
        </button>
        <button
          onClick={() => setCurrentScreen('balance')}
          className="px-4 py-2 rounded-lg font-semibold text-xs whitespace-nowrap"
          style={{
            background: currentScreen === 'balance' ? '#00FF9F' : 'rgba(255, 255, 255, 0.1)',
            color: currentScreen === 'balance' ? '#000000' : '#FFFFFF'
          }}
        >
          Bonus Balance
        </button>
        <button
          onClick={() => setCurrentScreen('wallet')}
          className="px-4 py-2 rounded-lg font-semibold text-xs whitespace-nowrap"
          style={{
            background: currentScreen === 'wallet' ? '#00FF9F' : 'rgba(255, 255, 255, 0.1)',
            color: currentScreen === 'wallet' ? '#000000' : '#FFFFFF'
          }}
        >
          Wallet
        </button>
        <button
          onClick={() => setShowNoDepositModal(true)}
          className="px-4 py-2 rounded-lg font-semibold text-xs whitespace-nowrap"
          style={{
            background: 'rgba(255, 215, 0, 0.2)',
            border: '1px solid #FFD700',
            color: '#FFD700'
          }}
        >
          No Deposit Modal
        </button>
      </div>

      {/* Content */}
      <div className="pt-20">
        {currentScreen === 'welcome' && <WelcomeBonus />}
        {currentScreen === 'success' && <BonusSuccess />}
        {currentScreen === 'balance' && <BonusBalance />}
        {currentScreen === 'wallet' && <WalletUpdated />}
      </div>

      {/* No Deposit Bonus Modal */}
      <NoDepositBonusModal
        isOpen={showNoDepositModal}
        onClose={() => setShowNoDepositModal(false)}
        onClaim={() => {
          setShowNoDepositModal(false);
          alert('$2 Bonus Claimed!');
        }}
      />
    </div>
  );
}
