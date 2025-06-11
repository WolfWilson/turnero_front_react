/**
 * Simulación mínima de login LDAP.
 * Reemplazá esta función por una llamada real al backend cuando esté listo.
 */
export type Rol = 'PUBLICO' | 'OPERADOR' | 'DIRECTOR';

export interface Sesion {
  token: string;
  rol: Rol;
}

export async function loginFakeLDAP(usuario: string, clave: string): Promise<Sesion> {
  // Demo: cualquier pass === "1234" entra con rol según el usuario
  if (clave !== '1234') {
    throw new Error('Credenciales inválidas');
  }

  const rol: Record<string, Rol> = {
    operador: 'OPERADOR',
    admin: 'DIRECTOR',
  }[usuario] ?? 'PUBLICO';

  return {
    token: crypto.randomUUID(),
    rol,
  };
}
