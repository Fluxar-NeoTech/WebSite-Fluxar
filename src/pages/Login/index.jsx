import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import EmailIcon from "../../assets/email_icon.svg";
import PasswordIcon from "../../assets/password_icon.svg";
import CheckBox from "./CheckBox/index.jsx";
import { Container, FormLogin, Right, Left } from "./styles.js";
import Logo from "../../assets/Logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(sessionStorage.getItem("user"));

    if (!storedUser) return;

    if (Date.now() > storedUser.expires) {
      console.log("Sessão expirada. Limpando dados...");
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("token");
      return;
    }

    if (storedUser.role === "A") {
      navigate("/home");
    } else {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("token");
    }
  }, [navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    
    const origin = "WEBSITE";

    if (!email || !password) {
      alert("Por favor, preencha e-mail e senha!");
      return;
    }

    setIsLoading(true);

    try {      
      const response = await fetch(
        "https://api-fluxar.onrender.com/api/employee/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, origin }),
        }
      );

      if (!response.ok) {
        alert("E-mail ou senha incorretos!");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      
      if (data.role !== "A") {
        alert("Acesso negado! Apenas analistas podem acessar o sistema.");
        setIsLoading(false);
        return;
      }

      const expires = rememberMe
        ? Date.now() + 7 * 24 * 60 * 60 * 1000
        : Date.now() + 60 * 60 * 1000

      const userData = {
        ...data,
        expires
      };

      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      
      if (data.token != null) {
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("token", data.token);
        } else {
          sessionStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("rememberMe", "false");
          sessionStorage.setItem("token", data.token);
        }
    }

      navigate("/home", { replace: true });

    } catch (err) {
      console.error("Erro ao realizar login:", err);
      alert("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Left>
        <img src={Logo} alt="Logo fluxar" />
      </Left>
      <Right>
        <FormLogin onSubmit={handleLogin}>
          <h2>Entrar como Analista</h2>
          <Input
            placeholder="E-mail"
            type="email"
            icon={EmailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={PasswordIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <CheckBox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            label="Lembrar de mim"
          />
          <Button
            type="submit"
            width="300px"
            background="linear-gradient(to right, #46005a, #a03cbeff);"
            backgroundHover="linear-gradient(to right, #650a80ff, #9a1ac4ff)"
            marginTop="20"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </FormLogin>
      </Right>
    </Container>
  );
}