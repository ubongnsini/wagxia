import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">

      <h1 className="text-5xl font-bold mb-6 text-center">
        Wagxa
      </h1>

      <p className="text-gray-400 mb-10 text-center max-w-md">
        Welcome to Wagxa — your gaming and rewards platform.
      </p>

      <div className="flex gap-4">
        <button onClick={() => navigate('/dashboard')}>
          Go to Dashboard
        </button>

        <button onClick={() => navigate('/wallet')}>
          Wallet
        </button>
      </div>

    </div>
  );
}	

