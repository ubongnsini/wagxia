// Block crypto wallet extensions from interfering with the app
// This runs before React and prevents wallet extensions from injecting

(function blockWalletInjection() {
  try {
    // Prevent wallet extensions from defining ethereum property
    if (!window.ethereum) {
      Object.defineProperty(window, 'ethereum', {
        value: undefined,
        writable: false,
        configurable: false,
        enumerable: false
      });
    }
  } catch (e) {
    // If ethereum already exists, seal it to prevent modifications
    try {
      if (window.ethereum) {
        Object.freeze(window.ethereum);
      }
    } catch (err) {
      // Silently fail if we can't freeze it
    }
  }

  // Block common wallet extension properties
  const walletProperties = [
    'phantom',
    'solana',
    'coinbaseWallet',
    'trustWallet',
    'web3',
    'evmAsk'
  ];

  walletProperties.forEach(prop => {
    try {
      if (!(prop in window)) {
        Object.defineProperty(window, prop, {
          value: undefined,
          writable: false,
          configurable: false,
          enumerable: false
        });
      }
    } catch (e) {
      // Ignore if property already exists
    }
  });

  // Suppress wallet-related errors globally
  const originalError = console.error;
  const originalWarn = console.warn;

  const isWalletError = (message: string) => {
    return (
      message.includes('MetaMask') ||
      message.includes('ethereum') ||
      message.includes('Phantom') ||
      message.includes('wallet') ||
      message.includes('evmAsk') ||
      message.includes('chrome-extension') ||
      message.includes('Cannot redefine property')
    );
  };

  console.error = (...args: any[]) => {
    const message = args.join(' ');
    if (!isWalletError(message)) {
      originalError.apply(console, args);
    }
  };

  console.warn = (...args: any[]) => {
    const message = args.join(' ');
    if (!isWalletError(message)) {
      originalWarn.apply(console, args);
    }
  };

  // Suppress unhandled promise rejections from wallet extensions
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && isWalletError(String(event.reason))) {
      event.preventDefault();
    }
  });

  // Suppress general errors from wallet extensions
  window.addEventListener('error', (event) => {
    if (event.message && isWalletError(event.message)) {
      event.preventDefault();
    }
  });
})();

export {};
