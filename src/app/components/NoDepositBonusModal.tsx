'use client';

import { motion } from 'motion/react';
import { X, Gift, Sparkles } from 'lucide-react';

interface NoDepositBonusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaim: () => void;
}

export function NoDepositBonusModal({ isOpen, onClose, onClaim }: NoDepositBonusModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)',
          border: '2px solid rgba(0, 255, 159, 0.3)',
          boxShadow: '0 0 50px rgba(0, 255, 159, 0.3)'
        }}
      >
        {/* Header */}
        <div className="relative p-6 text-center" style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.15) 0%, rgba(0, 217, 255, 0.15) 100%)',
          borderBottom: '1px solid rgba(0, 255, 159, 0.2)'
        }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg transition-all hover:bg-white hover:bg-opacity-10"
          >
            <X className="w-5 h-5" style={{ color: '#9CA3AF' }} />
          </button>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="inline-block mb-3"
          >
            <div className="relative">
              <div className="text-6xl">🎁</div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2 text-3xl"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-2xl font-black mb-2" style={{ color: '#FFFFFF' }}>
            Free Welcome Bonus
          </h2>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            No deposit required!
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-lg mb-2" style={{ color: '#FFFFFF' }}>
              Claim
            </p>
            <p className="text-5xl font-black mb-3" style={{
              background: 'linear-gradient(90deg, #00FF9F 0%, #00D9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              $2
            </p>
            <p className="text-base font-semibold" style={{ color: '#00FF9F' }}>
              Free Bonus instantly!
            </p>
          </div>

          {/* Claim Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClaim}
            className="w-full py-4 rounded-xl font-bold text-lg mb-4 transition-all"
            style={{
              background: 'linear-gradient(135deg, #00FF9F 0%, #00D9FF 100%)',
              color: '#000000',
              boxShadow: '0 0 30px rgba(0, 255, 159, 0.5)'
            }}
          >
            Claim $2 Now
          </motion.button>

          {/* Terms */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#00FF9F' }}></div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                Added to Bonus Balance
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#00FF9F' }}></div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                20x wagering requirement
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#00FF9F' }}></div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                Play responsibly • 18+
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-2 h-2 rounded-full"
                style={{ background: i % 2 === 0 ? '#00FF9F' : '#00D9FF' }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
