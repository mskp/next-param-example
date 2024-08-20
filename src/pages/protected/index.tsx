import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { isLoggedin, logout } from "../../lib/utils";
import useNextParam from "../../hooks/useNextParam";

/**
 * ProtectedPage is a wrapper component that guards protected routes in the application.
 * It checks if the user is authenticated, and if not, redirects them to the login page.
 * The login page URL includes a `next` parameter, which stores the path the user was trying to access.
 * Upon successful login, the user is redirected back to the intended page.
 *
 * @returns {JSX.Element} - Either the protected page content or a redirection to the login page.
 */
export default function ProtectedPage(): JSX.Element {
  const { pathname } = useLocation(); // Get the current path the user is trying to access.
  const { nextParam } = useNextParam(); // Extract the `next` parameter if it exists.
  const navigate = useNavigate(); // Hook to programmatically navigate within the app.

  // If the user is not logged in, redirect them to the login page.
  // The `next` parameter is set to the path the user was trying to access.
  if (!isLoggedin()) {
    return <Navigate to={`/login?next=${nextParam ?? pathname}`} replace />;
  }

  // Handle the logout process.
  // Once the user logs out, they are redirected to the login page.
  const handleLogout = () => {
    logout(); // Perform logout logic, like clearing tokens or session data.
    navigate({ pathname: "/login" }); // Redirect to the login page.
  };

  // If the user is authenticated, render the protected page content and a logout button.
  return (
    <>
      <Outlet />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
