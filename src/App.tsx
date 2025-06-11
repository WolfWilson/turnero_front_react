// src/App.tsx
import './index.css';
import { TurneroRouterProvider } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(); // puedes configurar retry, cacheTime, etc.

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TurneroRouterProvider />
    </QueryClientProvider>
  );
}
// Aquí se inicializa el cliente de React Query y se envuelve el router
// en el proveedor de QueryClientProvider para que todas las consultas
// tengan acceso al cliente de React Query. Esto permite que las consultas      