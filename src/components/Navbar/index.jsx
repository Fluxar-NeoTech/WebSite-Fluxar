import { useNavigate } from "react-router-dom";
import FluxarLogo from "../../assets/Logo.svg";
import {
  NavbarContainer,
  Logo,
  Menu,
  ProfileIcon,
  Left,
  Right,
  Dropdown,
} from "./styles";
import ProfileIconSVG from "../../assets/profile_icon.svg";
import MenuIcon from "../../assets/menu_icon.svg";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(ProfileIconSVG);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const rememberMe = localStorage.getItem("rememberMe");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleProfile = async () => {
    try {
      const idUser = Number(user?.id);
      const response = await fetch(
        "https://api-fluxar.onrender.com/api/employee/profile/" + idUser,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        alert("Não foi possível carregar o perfil!");
        return;
      }

      const data = await response.json();

      setProfileImage(data.profilePhoto || ProfileIconSVG);
    } catch (err) {
      console.log("Erro ao carregar o perfil: ", err);
      alert("Erro na conexão com o servidor");
    }
  };

  useEffect(() => {
    handleProfile();
    
    if (rememberMe === "false") {
      localStorage.removeItem("user");
    }
    
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
          <img
            src={profileImage}
            alt="Foto de perfil"
            draggable="false"
            style={{ borderRadius: "50%", width: 40, height: 40 }}
          />
          {open && (
            <Dropdown>
              <li>Alterar foto de perfil</li>
              <li id="logout" onClick={handleLogout}>
                Sair da conta
              </li>
            </Dropdown>
          )}
        </ProfileIcon>
      </Right>
    </NavbarContainer>
  );
}
