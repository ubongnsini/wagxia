import { useState } from 'react';

export function HomePage() {
  const [activeTab, setActiveTab] = useState<'home' | 'game'>('home');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold">Wagxa</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-2 rounded-xl ${
              activeTab === 'home' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => setActiveTab('game')}
            className={`px-4 py-2 rounded-xl ${
              activeTab === 'game' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            Live Game
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">

        {activeTab === 'home' && (
          <div className="text-center mt-20">
            <h2 className="text-5xl font-bold mb-4">
              Welcome to Wagxa
            </h2>

            <p className="text-gray-400 mb-10">
              Live PvP games, wheel spins, and instant rewards.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 rounded-xl">
                Join Game
              </button>

              <button className="px-6 py-3 bg-gray-800 rounded-xl">
                View Wallet
              </button>
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <div className="grid lg:grid-cols-2 gap-6 mt-10">

            {/* LIVE WHEEL (placeholder for now) */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Live Wheel</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Wheel will be restored here
              </div>
            </div>

            {/* ACTIVITY FEED */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Live Activity</h3>

              <div className="space-y-3 text-sm text-gray-300">
                <p>User842 joined $20</p>
                <p>KingDex won $167</p>
                <p>SpinMaster joined $35</p>
                <p>Player391 won $203</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}	

