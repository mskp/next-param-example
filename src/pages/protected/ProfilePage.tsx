import { Link } from "react-router-dom";

/**
 * Profile Page of the application.
 * It includes a heading and a navigation link to the Home page.
 *
 * @returns {JSX.Element} - The rendered profile page with a navigation link.
 */
export default function ProfilePage(): JSX.Element {
  return (
    <>
      <h3>Profile Page</h3>
      <Link to={"/"}>Home</Link>
    </>
  );
}
