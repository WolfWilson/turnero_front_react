import { useQuery } from '@tanstack/react-query';
import { fetchTurnosPantalla } from '../api/turnos';

export function useTurnosPantalla() {
  return useQuery({
    queryKey: ['turnos-pantalla'],
    queryFn: fetchTurnosPantalla,
    refetchInterval: 3000, // 🔄 actualiza cada 3 s (reemplaza luego por WebSocket)
  });
}
