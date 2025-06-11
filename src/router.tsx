import {
  Router,
  RouterProvider,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import Layout from './shared/Layout';
import Login from './auth/Login';
import KioskPage from './kiosko/KioskPage';
import DeskPage from './operator/DeskPage';
import AdminDash from './admin/AdminDash';
import RequireAuth from './auth/RequireAuth';
import DisplayPage from './monitor/DisplayPage';


/* 1. Ruta raíz (layout) */
const rootRoute = new RootRoute({
  component: Layout,
});

/* 2. Rutas hijas */
const kioskRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: KioskPage,
});

/* … rutas hijas … */
const screenRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/pantalla',
  component: DisplayPage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const operatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/operador',
  component: () => (
    <RequireAuth role={['OPERADOR', 'DIRECTOR']}>
      <DeskPage />
    </RequireAuth>
  ),
});

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => (
    <RequireAuth role="DIRECTOR">
      <AdminDash />
    </RequireAuth>
  ),
});

/* 3. Árbol y router */
const routeTree = rootRoute.addChildren([
  kioskRoute,                //turnero token
  loginRoute,                  //login
  operatorRoute,              //operadores
  adminRoute,                 //sección del admin 
  screenRoute,             //pantalla de turnos
]);

export const router = new Router({ routeTree });

/* 4. Provider que usarás en <App /> */
export function TurneroRouterProvider() {
  return <RouterProvider router={router} />;
}
