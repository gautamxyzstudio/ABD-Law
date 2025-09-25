import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface User {
  id: string;
  name: string;
  email: string;
  role: 'content-manager' | 'manager' | 'admin';
  token: string;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: 'auth-storage' }
  )
);
