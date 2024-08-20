import {
  createBrowserRouter,
  Outlet,
  type RouteObject,
} from "react-router-dom";

import AuthPage from "./pages/auth";
import LoginPage from "./pages/auth/LoginPage";
import NotFound from "./pages/NotFoundPage";
import ProtectedPage from "./pages/protected";
import HomePage from "./pages/protected/HomePage";
import ProfilePage from "./pages/protected/ProfilePage";

const authRoutes: RouteObject[] = [
  {
    element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    element: (
      <>
        <header>
          <h2>Next Param Example</h2>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      ...authRoutes,
      ...protectedRoutes,
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
