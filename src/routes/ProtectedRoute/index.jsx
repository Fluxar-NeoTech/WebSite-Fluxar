import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user");

  if (!storedUser) {
    console.log("Usuário não autenticado, redirecionando para login");
    return <Navigate to="/" replace />;
  }

  let userData;
  try {
    userData = JSON.parse(storedUser);
  } catch (error) {
    console.log("Erro ao analisar userData:", error);
    localStorage.clear();
    sessionStorage.clear();
    return <Navigate to="/" replace />;
  }

  if (!userData || userData.role !== "A") {
    localStorage.clear();
    sessionStorage.clear();
    return <Navigate to="/" replace />;
  }

  if (Date.now() > userData.expires) {
    alert("Sessão expirada! Redirecionando para login.");
    localStorage.clear();
    sessionStorage.clear();
    return <Navigate to="/" replace />;
  }

  return children;
}
