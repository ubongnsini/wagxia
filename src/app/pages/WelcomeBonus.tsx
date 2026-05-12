'use client';

import { useState } from 'react';
import { ArrowLeft, Bell, Menu, Gift, Star, Crown } from 'lucide-react';
import { motion } from 'motion/react';

export default function WelcomeBonus() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const bonusTiers = [
    {
      id: 1,
      bonus: 5,
      minDeposit: 10,
      wagering: 20,
      badge: 'Most Popular',
      glowColor: '#00FF9F',
      featured: true
    },
    {
      id: 2,
      bonus: 10,
      minDeposit: 20,
      wagering: 20,
      glowColor: '#00D9FF'
    },
    {
      id: 3,
      bonus: 25,
      minDeposit: 50,
      wagering: 20,
      glowColor: '#A78BFA'
    },
    {
      id: 4,
      bonus: 50,
      minDeposit: 100,
      wagering: 22,
      glowColor: '#F59E0B'
    },
    {
      id: 5,
      bonus: 200,
      minDeposit: 500,
      wagering: 25,
      badge: 'High Roller',
      glowColor: '#FFD700',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <div className="px-4 py-4" style={{
        background: 'linear-gradient(180deg, rgba(0, 255, 159, 0.1) 0%, rgba(10, 10, 10, 0) 100%)',
        borderBottom: '1px solid rgba(0, 255, 159, 0.1)'
      }}>
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <ArrowLeft className="w-6 h-6" style={{ color: '#00FF9F' }} />
          </button>
          <div className="flex items-center gap-3">
            <button className="p-2 relative">
              <Bell className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: '#00FF9F' }}></span>
            </button>
            <button className="p-2">
              <Menu className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight" style={{ color: '#FFFFFF' }}>
              Wagxa <span style={{ color: '#00FF9F' }}>[2.0]</span>
            </h1>
          </div>
          <div className="px-4 py-2 rounded-xl" style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.2) 0%, rgba(0, 217, 255, 0.2) 100%)',
            border: '1px solid rgba(0, 255, 159, 0.3)'
          }}>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>Balance</p>
            <p className="text-lg font-bold" style={{ color: '#00FF9F' }}>$17,500</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Main Headline */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎁</div>
          <h2 className="text-3xl font-black mb-3" style={{ color: '#FFFFFF' }}>
            Welcome to Wagxa!
          </h2>
          <p className="text-2xl font-bold mb-2" style={{
            background: 'linear-gradient(90deg, #00FF9F 0%, #00D9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Claim Your Bonus Up to $200
          </p>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            New users only. Choose your bonus package below.
          </p>
        </div>

        {/* Bonus Tier Cards */}
        <div className="space-y-4 mb-8">
          {bonusTiers.map((tier) => (
            <motion.div
              key={tier.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedTier(tier.id)}
              className="relative p-5 rounded-2xl cursor-pointer transition-all"
              style={{
                background: selectedTier === tier.id
                  ? `linear-gradient(135deg, ${tier.glowColor}20 0%, ${tier.glowColor}10 100%)`
                  : 'rgba(20, 20, 20, 0.6)',
                border: selectedTier === tier.id
                  ? `2px solid ${tier.glowColor}`
                  : '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: tier.featured
                  ? `0 0 30px ${tier.glowColor}40`
                  : 'none'
              }}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: tier.id === 1 ? '#00FF9F' : '#FFD700',
                    color: '#000000'
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div className="text-center">
                <div className="text-5xl font-black mb-2" style={{ color: tier.glowColor }}>
                  ${tier.bonus}
                </div>
                <div className="text-lg font-bold mb-1" style={{ color: '#FFFFFF' }}>
                  Bonus
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>Min Deposit</p>
                    <p className="text-base font-bold" style={{ color: '#FFFFFF' }}>${tier.minDeposit}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>Wagering</p>
                    <p className="text-base font-bold" style={{ color: '#FFFFFF' }}>{tier.wagering}x</p>
                  </div>
                </div>

                <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>
                  Added to Bonus Balance
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deposit Button */}
        <button
          className="w-full py-4 rounded-xl font-bold text-lg mb-4 transition-all"
          style={{
            background: 'linear-gradient(135deg, #00FF9F 0%, #00D9FF 100%)',
            color: '#000000',
            boxShadow: '0 0 30px rgba(0, 255, 159, 0.5)'
          }}
        >
          Deposit Now & Claim Bonus
        </button>

        {/* No Deposit Bonus Link */}
        <div className="text-center mb-6">
          <button className="text-sm font-semibold underline" style={{ color: '#00FF9F' }}>
            Claim $2 No Deposit Bonus
          </button>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-xs leading-relaxed" style={{ color: '#6B7280' }}>
          Bonus added to Bonus Balance • Wagering requirements apply<br />
          Play responsibly • 18+
        </div>
      </div>
    </div>
  );
}
