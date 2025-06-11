import { create } from 'zustand';
import type { Rol, Sesion } from '../api/auth';

interface AuthState {
  sesion: Sesion | null;
  login: (sesion: Sesion) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  sesion: JSON.parse(localStorage.getItem('sesion') || 'null'),
  login: (sesion) => {
    localStorage.setItem('sesion', JSON.stringify(sesion));
    set({ sesion });
  },
  logout: () => {
    localStorage.removeItem('sesion');
    set({ sesion: null });
  },
}));

/** Helper para saber si el usuario tiene un rol concreto */
export function hasRole(required: Rol | Rol[]) {
  const { sesion } = useAuth.getState();
  if (!sesion) return false;
  if (Array.isArray(required)) return required.includes(sesion.rol);
  return sesion.rol === required;
}
