
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function HomePage() {
  const { openAuthModal } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">

      {/* TOP HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold">Wagxa</h1>

        <div className="flex gap-3">
          <button
            onClick={() => openAuthModal('login')}
            className="px-4 py-2 bg-gray-800 rounded-xl"
          >
            Login
          </button>

          <button
            onClick={() => openAuthModal('register')}
            className="px-4 py-2 bg-blue-600 rounded-xl"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

        <h2 className="text-5xl font-bold mb-4">
          Welcome to Wagxa
        </h2>

        <p className="text-gray-400 max-w-md mb-10">
          Live gaming, PvP games, rewards, and instant wins — all in one platform.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => openAuthModal('register')}
            className="px-8 py-4 bg-blue-600 rounded-2xl font-semibold"
          >
            Get Started
          </button>

          <button
            onClick={() => openAuthModal('login')}
            className="px-8 py-4 bg-gray-800 rounded-2xl font-semibold"
          >
            Login
          </button>
        </div>
      </div>

    </div>
  );
}	

