import { useState } from 'react';

function App() {
  const [showWallet, setShowWallet] = useState(false);

  if (showWallet) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6">
        <button 
          onClick={() => setShowWallet(false)}
          className="mb-8 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-2xl text-lg flex items-center gap-2"
        >
          ← Back to Home
        </button>
        
        <h1 className="text-4xl font-bold mb-8">💰 Dashboard / Wallet</h1>
        
        <div className="bg-gray-900 rounded-3xl p-8 max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg">Your wallet interface goes here...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold mb-12 text-center">Wagxa</h1>
      
      <button 
        onClick={() => setShowWallet(true)}
        className="px-14 py-7 bg-blue-600 hover:bg-blue-700 rounded-3xl text-2xl font-semibold flex items-center gap-3 shadow-xl active:scale-95 transition-all"
      >
        🏠 Go to Dashboard
      </button>
    </div>
  );
}

export default App;
