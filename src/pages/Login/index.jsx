import Button from "../../components/Button";
import Input from "../../components/Input";
import EmailIcon from '../../assets/email_icon.svg';
import PasswordIcon from '../../assets/password_icon.svg';
import CheckBox from "./CheckBox/index.jsx";
import { Container, FormLogin, Right, Left } from "./styles.js";
import Logo from "../../assets/Logo.svg";


export default function Login() {
    return (
        <Container>
            <Left>
                <img src={Logo} alt="Logo fluxar" />
            </Left>
            <Right>
                <FormLogin>
                    <h2>Entrar como Analista</h2>
                    <Input placeholder={"E-mail"} type="email" icon={EmailIcon} />
                    <Input placeholder={"Senha"} type="password" icon={PasswordIcon} />
                    <CheckBox />
                    <Button
                    type="submit"
                    width="300px"
                    background="linear-gradient(to right, #46005a, #a03cbeff);"
                    backgroundHover="linear-gradient(to right, #650a80ff, #9a1ac4ff)"
                    marginTop="20"
                    >Entrar</Button>
                </FormLogin>
            </Right>
        </Container>
    )
}