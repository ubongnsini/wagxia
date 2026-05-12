'use client';

import { ArrowLeft, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function BonusBalance() {
  const wageringProgress = 340;
  const wageringRequired = 1000;
  const progressPercent = (wageringProgress / wageringRequired) * 100;
  const bonusBalance = 23.45;
  const wageringLeft = wageringRequired - wageringProgress;

  const recentActivity = [
    { game: 'Color Prediction', bet: 10, wagered: 10, time: '2 mins ago' },
    { game: 'Crash Game', bet: 25, wagered: 25, time: '15 mins ago' },
    { game: 'Wheel Spin', bet: 15, wagered: 15, time: '32 mins ago' },
    { game: 'Dice Pool', bet: 20, wagered: 20, time: '1 hour ago' },
  ];

  return (
    <div className="min-h-screen pb-20" style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <div className="px-4 py-4 sticky top-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(0, 255, 159, 0.1) 0%, rgba(10, 10, 10, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 255, 159, 0.1)'
      }}>
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <ArrowLeft className="w-6 h-6" style={{ color: '#00FF9F' }} />
          </button>
          <h1 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
            Bonus Balance
          </h1>
          <div className="w-10"></div>
        </div>

        {/* Balance Display */}
        <div className="text-center py-6 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.15) 0%, rgba(0, 217, 255, 0.15) 100%)',
          border: '2px solid rgba(0, 255, 159, 0.3)',
          boxShadow: '0 0 40px rgba(0, 255, 159, 0.2)'
        }}>
          <p className="text-sm mb-1" style={{ color: '#9CA3AF' }}>Bonus Balance</p>
          <p className="text-5xl font-black" style={{ color: '#00FF9F' }}>
            ${bonusBalance.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Wagering Progress */}
        <div className="rounded-2xl p-5" style={{
          background: 'rgba(20, 20, 20, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5" style={{ color: '#00FF9F' }} />
            <h3 className="text-lg font-bold" style={{ color: '#FFFFFF' }}>
              Wagering Progress
            </h3>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold" style={{ color: '#00FF9F' }}>
                ${wageringProgress}
              </span>
              <span className="text-lg font-semibold" style={{ color: '#9CA3AF' }}>
                / ${wageringRequired}
              </span>
            </div>
            <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full rounded-full relative"
                style={{
                  background: 'linear-gradient(90deg, #00FF9F 0%, #00D9FF 100%)'
                }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-1"
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                  }}
                />
              </motion.div>
            </div>
            <div className="text-center mt-2">
              <span className="text-xl font-bold" style={{ color: '#00D9FF' }}>
                {progressPercent.toFixed(0)}%
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="p-3 rounded-lg" style={{ background: 'rgba(0, 255, 159, 0.1)' }}>
              <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Current Bonus</p>
              <p className="text-lg font-bold" style={{ color: '#00FF9F' }}>
                ${bonusBalance.toFixed(2)}
              </p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'rgba(255, 107, 107, 0.1)' }}>
              <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Wagering Left</p>
              <p className="text-lg font-bold" style={{ color: '#FF6B6B' }}>
                ${wageringLeft}
              </p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{
          background: 'rgba(255, 107, 107, 0.1)',
          border: '1px solid rgba(255, 107, 107, 0.3)'
        }}>
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FF6B6B' }} />
          <p className="text-sm" style={{ color: '#FF6B6B' }}>
            If your Bonus Balance reaches $0, the bonus will end.
          </p>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl p-5" style={{
          background: 'rgba(20, 20, 20, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 className="text-lg font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Recent Activity
          </h3>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              >
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                    {activity.game}
                  </p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>
                    {activity.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold mb-1" style={{ color: '#00FF9F' }}>
                    +${activity.wagered} wagered
                  </p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>
                    Bet: ${activity.bet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            className="w-full py-4 rounded-xl font-bold text-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #00FF9F 0%, #00D9FF 100%)',
              color: '#000000',
              boxShadow: '0 0 30px rgba(0, 255, 159, 0.5)'
            }}
          >
            Play Games
          </button>

          <button
            className="w-full py-4 rounded-xl font-semibold transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 159, 0.3)',
              color: '#00FF9F'
            }}
          >
            Transfer from Main to Game Balance
          </button>
        </div>
      </div>
    </div>
  );
}
