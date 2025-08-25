import FluxarLogo from "../../assets/Logo.svg";
import { NavbarContainer, Logo, Menu, ProfileIcon, Left, Right, Dropdown } from "./styles";
import ProfileIconSVG from "../../assets/profile_icon.svg";
import MenuIcon from "../../assets/menu_icon.svg";
import { useState, useRef, useEffect } from "react";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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

                <ProfileIcon ref={profileRef} onClick={() => setOpen(!open)}>
                    <img src={ProfileIconSVG} alt="Ícone de perfil" draggable="false" />
                    {open && (
                        <Dropdown>
                            <li>Alterar foto de perfil</li>
                            <li id="logout">Sair da conta</li>
                        </Dropdown>
                    )}
                </ProfileIcon>
            </Right>
        </NavbarContainer>
    )
}