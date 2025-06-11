import { Outlet } from '@tanstack/react-router';
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

/* 1. Rutas raíz */
const rootRoute = new RootRoute({
  component: Layout,
});

/* 2. Rutas hijas */
const kioskRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: KioskPage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const operatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/operador',
  component: DeskPage,
});

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminDash,
});

/* 3. Árbol y router */
const routeTree = rootRoute.addChildren([
  kioskRoute,
  loginRoute,
  operatorRoute,
  adminRoute,
]);

export const router = new Router({ routeTree });

/* 4. Componente proveedor – lo usaremos en App */
export function TurneroRouterProvider() {
  return <RouterProvider router={router} />;
}
