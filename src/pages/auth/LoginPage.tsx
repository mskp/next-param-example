import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNextParam from "../../hooks/useNextParam";
import { USER_CREDENTIALS, type UserCredentials } from "../../lib/constants";
import { login } from "../../lib/utils";

/**
 * Login Page of the application.
 * It allows users to input their credentials and handles the login process.
 *
 * - On successful login, the user is redirected to the page specified by the `next` parameter.
 * - If the credentials are invalid, an alert is shown.
 *
 * @returns {JSX.Element} - The rendered login form.
 */
export default function LoginPage(): JSX.Element {
  const navigate = useNavigate(); // Hook to navigate programmatically within the app.
  const { nextParam } = useNextParam(); // Custom hook to get the `next` parameter from the URL.
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  }); // State to manage user input for username and password.

  /**
   * Handles input changes for the username and password fields.
   * Updates the credentials state with the new values.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event from the input field.
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials((credentials) => ({ ...credentials, [name]: value }));
  };

  /**
   * Handles the login form submission.
   * Validates the user credentials and logs in the user if they are correct.
   * Redirects the user to the page specified by the `next` parameter on successful login.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    const { username, password } = credentials;

    // Validate if both username and password fields are filled.
    if (!username || !password) return;

    // Check if the entered credentials match the predefined user credentials.
    const isUserValid =
      username === USER_CREDENTIALS.username &&
      password === USER_CREDENTIALS.password;

    // If the credentials are valid, log in the user and redirect to the next page.
    if (isUserValid) {
      login(); // Perform login logic, like setting tokens or session data.
      return navigate(nextParam!); // Redirect to the page specified by the `next` parameter.
    }

    // Show an alert if the credentials are invalid.
    alert("Invalid username or password");
  };

  return (
    <form onSubmit={loginUser}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleInputChange}
        placeholder="Enter username"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
        placeholder="Enter password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
