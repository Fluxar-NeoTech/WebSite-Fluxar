import FluxarLogo from "../../assets/Logo.svg";
import { NavbarContainer, Logo, Menu, ProfileIcon, Left, Right } from "./styles";
import ProfileIconSVG from "../../assets/profile_icon.svg";


export default function Navbar() {
    return (
        <NavbarContainer>
            <Left>
                <Logo>
                    <img src={FluxarLogo} alt="Logo do Fluxar" draggable="false" />
                </Logo>
            </Left>
            <Right>
                <Menu>
                    <li>Home</li>
                    <li>ChatBot</li>
                    <li>Sobre nós</li>
                </Menu>

                <ProfileIcon>
                    <img src={ProfileIconSVG} alt="Ícone de perfil" draggable="false" />
                </ProfileIcon>
            </Right>
        </NavbarContainer>
    )
}