import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useNextParam from "../../hooks/useNextParam";
import { isLoggedin } from "../../lib/utils";

/**
 * AuthPage is a wrapper component for auth pages, such as login and signup.
 * It handles redirection based on the user's login status and the `next` parameter in the URL.
 *
 * - If the user is logged in, they are redirected to the page specified by the `next` parameter.
 * - If the `next` parameter is not set, it defaults to the home page (`/`).
 * - If the user is not logged in, it renders the nested routes (usually the login page).
 *
 * @returns {JSX.Element} - The appropriate redirection or the child routes based on the authentication state.
 */
export default function AuthPage(): JSX.Element {
  const { nextParam, setNextParam } = useNextParam(); // Custom hook to manage the `next` URL parameter.
  const loggedin = isLoggedin(); // Check if the user is currently logged in.

  useEffect(() => {
    // If there is no `next` parameter set, default it to the home page ('/').
    if (!nextParam) setNextParam("/");
  }, [nextParam, setNextParam]);

  // If the user is already logged in, redirect them to the page specified by the `next` parameter.
  if (loggedin) return <Navigate to={nextParam!} />;

  // If the user is not logged in, render the child components (typically the login or signup page).
  return <Outlet />;
}
