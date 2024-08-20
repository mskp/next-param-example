import { Link } from "react-router-dom";

/**
 * Home Page of the application.
 * It includes a heading and a navigation link to the Profile page.
 *
 * @returns {JSX.Element} - The rendered home page with a heading and a link to the Profile page.
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <h3>Home Page</h3>
      <Link to={"profile"}>Profile</Link>
    </>
  );
}
