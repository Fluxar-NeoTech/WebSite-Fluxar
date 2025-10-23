import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./App.css";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import RedefinePassword from "./pages/RedefinePassword";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fluxai"
          element={
            <ProtectedRoute>
              <Navbar />
              <ChatBot />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relatorios"
          element={
            <ProtectedRoute>
              <Navbar />
              <div style={{ paddingTop: '80px', textAlign: 'center' }}>
                <h1>Relatórios</h1>
                <p>Página em desenvolvimento</p>
              </div>
            </ProtectedRoute>
          }
        />
       <Route
          path="/redefinePassword"
          element={
            <RedefinePassword />
          }
        />
      </Routes>
    </Router>
  );
}