import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userFromLocalStorage = localStorage.getItem("user");
  const userFromSessionStorage = sessionStorage.getItem("user");
  const user = userFromLocalStorage || userFromSessionStorage;

  if (!user) {
    console.log("Usuário não autenticado, redirecionando para login");
    return <Navigate to="/" replace />;
  }

  try {
    const userData = JSON.parse(user);
    if (userData.role !== "A") {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    console.log("Erro: ", error);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    localStorage.removeItem("rememberMe");
    return <Navigate to="/" replace />;
  }

  return children;
}