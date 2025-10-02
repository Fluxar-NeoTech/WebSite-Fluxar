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
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api-fluxar.onrender.com/api/employee/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        alert("E-mail ou senha incorretos!");
        return;
      }

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.setItem("rememberMe", "false");
      }

      navigate("/home");
    } catch (err) {
      console.error("Erro ao realizar login:", err.message);
      alert("Erro ao fazer login. Tente novamente.");
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
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={PasswordIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckBox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Button
            type="submit"
            width="300px"
            background="linear-gradient(to right, #46005a, #a03cbeff);"
            backgroundHover="linear-gradient(to right, #650a80ff, #9a1ac4ff)"
            marginTop="20"
          >
            Entrar
          </Button>
        </FormLogin>
      </Right>
    </Container>
  );
}
