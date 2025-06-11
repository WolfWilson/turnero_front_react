import type { ReactNode } from 'react';          // ✅  type-only import
import { Navigate } from '@tanstack/react-router';
import { useAuth } from './useAuth';
import type { Rol } from '../api/auth';

interface Props {
  role?: Rol | Rol[];
  children: ReactNode;
}

export default function RequireAuth({ role, children }: Props) {
  const { sesion } = useAuth();

  if (!sesion) return <Navigate to="/login" />;

  if (
    role &&
    !((Array.isArray(role) ? role : [role]).includes(sesion.rol))
  ) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
