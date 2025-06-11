import { useState } from 'react';
import { loginFakeLDAP } from '../api/auth';
import { useNavigate } from '@tanstack/react-router';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const sesion = await loginFakeLDAP(usuario, clave);
      // Guarda el token local para futuras llamadas (localStorage, zustand, etc.)
      localStorage.setItem('sesion', JSON.stringify(sesion));
      navigate({ to: '/' }); // Redirigir a inicio
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Ingreso de operadores</h2>

      <label className="block mb-2 text-sm font-medium">
        Usuario
        <input
          className="mt-1 w-full border rounded px-3 py-2"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
      </label>

      <label className="block mb-4 text-sm font-medium">
        Contraseña
        <input
          type="password"
          className="mt-1 w-full border rounded px-3 py-2"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
      </label>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        Entrar
      </button>
    </form>
  );
}
