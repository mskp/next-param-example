import { useSearchParams } from "react-router-dom";

type UseNextParamReturnType = {
  nextParam: string | null;
  setNextParam: (next: string) => void;
};

/**
 * useNextParam is a custom hook that manages the `next` parameter in the URL search params.
 *
 * - `nextParam`: Retrieves the current value of the `next` parameter from the URL.
 * - `setNextParam`: Updates the `next` parameter in the URL with a new value.
 *
 * This hook is particularly useful for redirecting users to a specific page after they log in.
 * For example, if a user tries to access a protected route without being logged in, the `next`
 * parameter can be set to that route so that after logging in, the user is redirected there instead
 * of the default page.
 *
 * @returns {UseNextParamReturnType} - An object containing `nextParam` and `setNextParam` functions.
 * - `nextParam`: The current value of the `next` parameter or `null` if not present.
 * - `setNextParam`: A function to update the `next` parameter in the URL.
 */
const useNextParam = (): UseNextParamReturnType => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getNextParam = () => searchParams.get("next");

  const setNextParam = (next: string) => {
    setSearchParams({ next });
  };

  return { nextParam: getNextParam(), setNextParam };
};

export default useNextParam;
