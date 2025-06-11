export interface Turno {
  id: number;        // T-102
  mesa: number;      // 3
  categoria: string; // Trámites
  estado: 'EN_CURSO' | 'PENDIENTE';
}

/** Genera datos aleatorios de demo */
function mockTurnos(): Turno[] {
  const base = [
    { id: 105, mesa: 2, categoria: 'Reclamos' },
    { id: 106, mesa: 1, categoria: 'Trámites' },
    { id: 107, mesa: 3, categoria: 'Consultas' },
  ];
  return base.map((t, i) => ({
    ...t,
    estado: i === 0 ? 'EN_CURSO' : 'PENDIENTE',
  }));
}

/** Simula fetch GET /api/turnos/pantalla */
export async function fetchTurnosPantalla(): Promise<Turno[]> {
  // ❗ aquí luego harás fetch('http://localhost:8000/api/turnos/pantalla')
  return new Promise((res) => setTimeout(() => res(mockTurnos()), 300));
}
