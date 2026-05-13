import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { AgeVerificationModal } from '../components/AgeVerificationModal';
import { Toaster } from '../components/ui/sonner';
import { useSidebar } from '../context/SidebarContext';
import { AuthModals } from '../components/AuthModals';
import { useAuth } from '../context/AuthContext';

/**
 * GLOBAL LAYOUT SYSTEM
 * Sidebar + Main content wrapper for all pages
 */

export function Root() {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { showAuthModal, closeAuthModal, authMode } = useAuth();

  const handleAuthSuccess = () => {
    // Optional redirect after login if needed
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar (always available, responsive) */}
      <div
        className={`
          fixed lg:sticky top-0 inset-y-0 left-0 z-50 lg:z-0
          transform transition-transform duration-300 lg:transform-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col" style={{ minHeight: '100vh' }}>
        <Outlet />
      </div>

      {/* Global UI Modals */}
      <AgeVerificationModal />
      <Toaster />

      <AuthModals
        show={showAuthModal}
        onClose={closeAuthModal}
        initialMode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
