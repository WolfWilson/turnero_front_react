import { useTurnosPantalla } from './useTurnosPantalla';

export default function DisplayPage() {
  const { data, isLoading } = useTurnosPantalla();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-3xl">
        Cargando…
      </div>
    );
  }

  const enCurso = data?.find((t) => t.estado === 'EN_CURSO');
  const siguientes = data?.filter((t) => t.estado === 'PENDIENTE') ?? [];

  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-900 text-white gap-8">
      {/* Turno actual */}
      {enCurso && (
        <div className="text-center">
          <p className="text-lg uppercase tracking-widest">Atendiendo</p>
          <p className="text-7xl font-extrabold mt-2">{`T-${enCurso.id}`}</p>
          <p className="text-2xl mt-4">{`Mesa ${enCurso.mesa}`}</p>
          <p className="text-xl text-slate-300 mt-1">{enCurso.categoria}</p>
        </div>
      )}

      {/* Lista próximos */}
      {siguientes.length > 0 && (
        <div className="w-full max-w-md">
          <h3 className="text-center text-lg mb-2">Próximos turnos</h3>
          <ul className="space-y-2">
            {siguientes.map((t) => (
              <li
                key={t.id}
                className="flex justify-between bg-slate-800 px-4 py-2 rounded"
              >
                <span>{`T-${t.id}`}</span>
                <span>{`Mesa ${t.mesa}`}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
