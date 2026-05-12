// Block wallet extensions FIRST - before anything else
import "@/walletBlocker";

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { UserProvider } from './context/UserContext';
import { SidebarProvider } from './context/SidebarContext';
import { AuthProvider } from './context/AuthContext';
export default function App() {
  return (
    <UserProvider>
      <SidebarProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </SidebarProvider>
    </UserProvider>
  );
}
