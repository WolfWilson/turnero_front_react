import { Outlet, Link } from '@tanstack/react-router';

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="bg-slate-800 text-white p-4">
        <h1 className="text-xl font-semibold">Turnero</h1>
        <nav className="mt-2 flex gap-4 text-sm">
          <Link to="/" className="[&.active]:underline">Kiosco</Link>
          <Link to="/login" className="[&.active]:underline">Login</Link>
          <Link to="/operador" className="[&.active]:underline">Operador</Link>
          <Link to="/admin" className="[&.active]:underline">Admin</Link>
        </nav>
      </header>

      <main className="flex-1 p-6 bg-slate-50">
        {/* Renderiza las rutas hijas */}
        <Outlet />
      </main>

      <footer className="text-center text-xs py-2 bg-slate-100">
        © 2025 – Proyecto Turnero
      </footer>
    </div>
  );
}
