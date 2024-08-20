import { Link } from "react-router-dom";
import { isLoggedin } from "../lib/utils";

export default function NotFoundPage() {
  const loggedin = isLoggedin();
  const href = loggedin ? "/" : "/login";
  const linkText = loggedin ? "Home" : "Login";

  return (
    <>
      <h3>Page not found</h3>
      <p>
        Navigate to: <Link to={href}>{linkText}</Link>
      </p>
    </>
  );
}
