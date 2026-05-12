'use client';

import { motion } from 'motion/react';
import { Gift, Sparkles } from 'lucide-react';

export default function BonusSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0A0A0A' }}>
      {/* Celebration Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#00FF9F' : i % 3 === 1 ? '#00D9FF' : '#A78BFA',
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              rotate: [0, 360],
              opacity: [1, 0.8, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative inline-block mb-6"
          >
            <div className="text-8xl">🎁</div>
            <div className="absolute -top-2 -right-2 text-4xl">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                ✨
              </motion.span>
            </div>
          </motion.div>

          {/* Congratulations Text */}
          <h1 className="text-4xl font-black mb-2" style={{ color: '#FFFFFF' }}>
            🎉 Congratulations!
          </h1>
          <p className="text-2xl font-bold mb-8" style={{
            background: 'linear-gradient(90deg, #00FF9F 0%, #00D9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            You received $50 Welcome Bonus
          </p>

          {/* Details Card */}
          <div className="rounded-2xl p-6 mb-6" style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)',
            border: '2px solid rgba(0, 255, 159, 0.3)',
            boxShadow: '0 0 40px rgba(0, 255, 159, 0.2)'
          }}>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span style={{ color: '#9CA3AF' }}>Bonus Amount:</span>
                <span className="text-2xl font-bold" style={{ color: '#00FF9F' }}>$50</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: '#9CA3AF' }}>Added to:</span>
                <span className="font-semibold" style={{ color: '#FFFFFF' }}>Bonus Balance</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: '#9CA3AF' }}>Wagering Required:</span>
                <span className="font-semibold" style={{ color: '#FFFFFF' }}>$1,000 (20x)</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm" style={{ color: '#9CA3AF' }}>Progress</span>
                <span className="text-sm font-bold" style={{ color: '#FFFFFF' }}>0 / $1,000 wagered</span>
              </div>
              <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '0%' }}
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00FF9F 0%, #00D9FF 100%)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl font-bold text-lg mb-3 transition-all"
            style={{
              background: 'linear-gradient(135deg, #00FF9F 0%, #00D9FF 100%)',
              color: '#000000',
              boxShadow: '0 0 30px rgba(0, 255, 159, 0.5)'
            }}
          >
            Start Playing Now
          </motion.button>

          <button
            className="w-full py-4 rounded-xl font-semibold transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 159, 0.3)',
              color: '#00FF9F'
            }}
          >
            View Bonus Progress
          </button>
        </motion.div>
      </div>
    </div>
  );
}
