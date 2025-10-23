import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import EmailIcon from "../../assets/email_icon.svg";
import PasswordIcon from "../../assets/password_icon.svg";
import { Container, Box } from "./styles";

export default function RedefinePassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!regexSenha.test(password)) {
            alert("A senha deve conter pelo menos 8 caracteres, uma letra e um número!");
            return;
        }

        setIsLoading(true);

        try {      
            const response = await fetch(
                "https://api-fluxar.onrender.com/api/employee/update/password",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!response.ok) {
                alert("E-mail inexistente!");
                setIsLoading(false);
                return;
            }

            alert("Senha redefinida com sucesso! Volte a tela de login.");
        } catch (err) {
            console.error("Erro ao redefinir senha:", err);
            alert("Erro ao refinir senha. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    } 

  return (
    <Container>
      <Box>
        <h1>Redefina sua senha</h1>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="E-mail"
            type="email"
            icon={EmailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Nova senha"
            type="password"
            icon={PasswordIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            width="300px"
            background="linear-gradient(to right, #46005a, #a03cbeff);"
            backgroundHover="linear-gradient(to right, #650a80ff, #9a1ac4ff)"
            marginTop="20"
          >
            {isLoading ? "Redefinindo..." : "Redefinir senha"}
          </Button>
        </form>
      </Box>
    </Container>
  );
}
