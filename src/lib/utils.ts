import { LOGIN_STATUS_KEY } from "./constants";

export function login(): void {
  localStorage.setItem(LOGIN_STATUS_KEY, "true");
}

export function logout(): void {
  localStorage.removeItem(LOGIN_STATUS_KEY);
}

export function isLoggedin(): boolean {
  return localStorage.getItem(LOGIN_STATUS_KEY) === "true";
}
