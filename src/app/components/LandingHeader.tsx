import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LandingHeaderProps {
  onMenuClick: () => void;
}

export function LandingHeader({ onMenuClick }: LandingHeaderProps) {
  const { openAuthModal } = useAuth();

  const handleSignIn = () => {
    openAuthModal('login');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        height: '56px',
        backgroundColor: 'rgba(13, 15, 20, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="h-full max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            <img 
              src="https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=WAGXIA" 
              alt="WAGXIA Logo" 
              className="w-full h-full object-contain p-1" 
            />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">WAGXIA</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSignIn}
            className="px-5 py-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden w-9 h-9 flex items-center justify-center"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
