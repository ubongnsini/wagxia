'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowDown, ArrowUp, ArrowLeftRight, Gift, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function WalletUpdated() {
  const [showTransferModal, setShowTransferModal] = useState(false);

  const mainBalance = 12500;
  const gameBalance = 5000;
  const bonusBalance = 45;
  const bonusWagered = 340;
  const bonusWageringRequired = 1000;
  const totalBalance = mainBalance + gameBalance + bonusBalance;

  return (
    <div className="min-h-screen pb-20" style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <div className="px-4 py-4 sticky top-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(0, 255, 159, 0.1) 0%, rgba(10, 10, 10, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 255, 159, 0.1)'
      }}>
        <div className="flex items-center justify-between">
          <button className="p-2">
            <ArrowLeft className="w-6 h-6" style={{ color: '#00FF9F' }} />
          </button>
          <h1 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
            Wallet
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Total Balance */}
        <div className="text-center py-8 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.15) 0%, rgba(0, 217, 255, 0.15) 100%)',
          border: '2px solid rgba(0, 255, 159, 0.3)',
          boxShadow: '0 0 40px rgba(0, 255, 159, 0.2)'
        }}>
          <p className="text-sm mb-2" style={{ color: '#9CA3AF' }}>Total Balance</p>
          <p className="text-5xl font-black" style={{
            background: 'linear-gradient(90deg, #00FF9F 0%, #00D9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ${totalBalance.toLocaleString()}
          </p>
        </div>

        {/* Claim Bonus Banner */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="p-4 rounded-xl cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.2) 100%)',
            border: '2px solid rgba(255, 215, 0, 0.5)',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ background: 'rgba(255, 215, 0, 0.3)' }}>
                <Gift className="w-6 h-6" style={{ color: '#FFD700' }} />
              </div>
              <div>
                <p className="font-bold" style={{ color: '#FFD700' }}>
                  Welcome Bonus Available!
                </p>
                <p className="text-xs" style={{ color: '#FFA500' }}>
                  Claim up to $200 bonus
                </p>
              </div>
            </div>
            <div className="text-2xl">🎁</div>
          </div>
        </motion.div>

        {/* Balance Cards */}
        <div className="space-y-4">
          {/* Main Balance */}
          <div className="p-5 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)',
            border: '2px solid rgba(0, 255, 159, 0.3)'
          }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Main Balance</p>
                <p className="text-3xl font-black" style={{ color: '#00FF9F' }}>
                  ${mainBalance.toLocaleString()}
                </p>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold" style={{
                background: 'rgba(0, 255, 159, 0.2)',
                color: '#00FF9F'
              }}>
                Withdrawable
              </div>
            </div>
            <p className="text-xs" style={{ color: '#6B7280' }}>
              Available for withdrawal anytime
            </p>
          </div>

          {/* Game Balance */}
          <div className="p-5 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
            border: '2px solid rgba(59, 130, 246, 0.3)'
          }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Game Balance</p>
                <p className="text-3xl font-black" style={{ color: '#3B82F6' }}>
                  ${gameBalance.toLocaleString()}
                </p>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold" style={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#3B82F6'
              }}>
                Active
              </div>
            </div>
            <p className="text-xs" style={{ color: '#6B7280' }}>
              Used for playing games
            </p>
          </div>

          {/* Bonus Balance */}
          <div className="p-5 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
            border: '2px solid rgba(167, 139, 250, 0.3)'
          }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Bonus Balance</p>
                <p className="text-3xl font-black" style={{ color: '#A78BFA' }}>
                  ${bonusBalance}
                </p>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold" style={{
                background: 'rgba(167, 139, 250, 0.2)',
                color: '#A78BFA'
              }}>
                Bonus
              </div>
            </div>

            {/* Mini Progress */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs" style={{ color: '#9CA3AF' }}>
                  Wagering Progress
                </span>
                <span className="text-xs font-bold" style={{ color: '#A78BFA' }}>
                  ${bonusWagered} / ${bonusWageringRequired}
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(bonusWagered / bonusWageringRequired) * 100}%`,
                    background: 'linear-gradient(90deg, #A78BFA 0%, #EC4899 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            className="py-4 rounded-xl font-bold transition-all flex flex-col items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #00FF9F 0%, #00D9FF 100%)',
              color: '#000000',
              boxShadow: '0 0 20px rgba(0, 255, 159, 0.4)'
            }}
          >
            <ArrowDown className="w-5 h-5" />
            <span className="text-sm">Deposit</span>
          </button>

          <button
            className="py-4 rounded-xl font-bold transition-all flex flex-col items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              color: '#FFFFFF',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
            }}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-sm">Withdraw</span>
          </button>

          <button
            onClick={() => setShowTransferModal(true)}
            className="py-4 rounded-xl font-bold transition-all flex flex-col items-center gap-2"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF'
            }}
          >
            <ArrowLeftRight className="w-5 h-5" />
            <span className="text-sm">Transfer</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <button
            className="w-full p-4 rounded-xl flex items-center justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ background: 'rgba(0, 255, 159, 0.1)' }}>
                <TrendingUp className="w-5 h-5" style={{ color: '#00FF9F' }} />
              </div>
              <span className="font-semibold" style={{ color: '#FFFFFF' }}>
                View Bonus Progress
              </span>
            </div>
            <span style={{ color: '#9CA3AF' }}>→</span>
          </button>

          <button
            className="w-full p-4 rounded-xl flex items-center justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ background: 'rgba(255, 215, 0, 0.1)' }}>
                <Gift className="w-5 h-5" style={{ color: '#FFD700' }} />
              </div>
              <span className="font-semibold" style={{ color: '#FFFFFF' }}>
                Claim Welcome Bonus
              </span>
            </div>
            <span style={{ color: '#9CA3AF' }}>→</span>
          </button>
        </div>
      </div>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
          onClick={() => setShowTransferModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md p-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)',
              border: '2px solid rgba(0, 255, 159, 0.3)'
            }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Transfer Balance
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm mb-2 block" style={{ color: '#9CA3AF' }}>
                  From
                </label>
                <select className="w-full p-3 rounded-xl font-semibold" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF'
                }}>
                  <option>Main Balance ($12,500)</option>
                  <option>Game Balance ($5,000)</option>
                </select>
              </div>

              <div>
                <label className="text-sm mb-2 block" style={{ color: '#9CA3AF' }}>
                  To
                </label>
                <select className="w-full p-3 rounded-xl font-semibold" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF'
                }}>
                  <option>Game Balance ($5,000)</option>
                  <option>Main Balance ($12,500)</option>
                </select>
              </div>

              <div>
                <label className="text-sm mb-2 block" style={{ color: '#9CA3AF' }}>
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 rounded-xl font-bold text-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF'
                  }}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowTransferModal(false)}
                className="flex-1 py-3 rounded-xl font-semibold"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF'
                }}
              >
                Cancel
              </button>
              <button
                className="flex-1 py-3 rounded-xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00FF9F 0%, #00D9FF 100%)',
                  color: '#000000'
                }}
              >
                Transfer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
