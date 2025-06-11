export type Rol = 'PUBLICO' | 'OPERADOR' | 'DIRECTOR';

export interface Sesion {
  token: string;
  rol: Rol;
}

/**
 * Usuarios y roles de prueba.
 * 👉 Modificá aquí para agregar o quitar logins:
 *    - clave DEMO = '1234' para todos
 *    - key = usuario, value = rol
 */
const usuariosDemo: Record<string, Rol> = {
  operador: 'OPERADOR',
  admin: 'DIRECTOR',
  juan: 'OPERADOR',
  carla: 'DIRECTOR',
};

export async function loginFakeLDAP(
  usuario: string,
  clave: string,
): Promise<Sesion> {
  if (clave !== '1234') {
    throw new Error('Credenciales inválidas');
  }

  const rol: Rol = usuariosDemo[usuario.toLowerCase()] ?? 'PUBLICO';

  return {
    token: crypto.randomUUID(),
    rol,
  };
}
