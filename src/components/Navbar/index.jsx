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
  HiddenFileInput
} from "./styles";
import ProfileIconSVG from "../../assets/profile_icon.svg";
import { useState, useRef, useEffect, useCallback } from "react";

const loadingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
  backgroundColor: 'rgba(0,0,0,0.5)',
  borderRadius: '50%',
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(ProfileIconSVG);
  const [isUploading, setIsUploading] = useState(false);
  const profileRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const handleProfile = useCallback(async () => {
    try {
      const idUser = Number(user?.id);
      const response = await fetch(
        `https://api-fluxar.onrender.com/api/employee/profile/${idUser}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        console.log("Não foi possível carregar o perfil!");
        return;
      }

      const data = await response.json();
      setProfileImage(data.profilePhoto || ProfileIconSVG);
    } catch (err) {
      console.log("Erro ao carregar o perfil: ", err);
    }
  }, [user?.id]);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione uma imagem válida (JPEG, PNG, etc.)!');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 5MB!');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const email = user?.email;
      if (!email) throw new Error('Email do usuário não encontrado');

      const url = `https://api-fluxar.onrender.com/api/employee/update-photo-site?email=${encodeURIComponent(email)}`;

      const response = await fetch(url, {
        method: "PUT",
        body: formData,
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        let errorMessage = `Erro ${response.status}: ${response.statusText}`;

        try {
          const errorText = await response.text();
          console.log("Error response:", errorText);
          
          if (errorText && errorText.trim().startsWith("{")) {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.message || errorMessage;
          } else if (errorText) {
            errorMessage = errorText;
          }
        } catch (error) {
          console.log("Erro ao processar a resposta de erro:", error);
        }
        
        throw new Error(errorMessage);
      }

      await handleProfile();
      alert('Foto de perfil atualizada com sucesso!');

      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (err) {
      console.error("Erro ao fazer upload da foto:", err);
      alert(err.message || 'Erro ao fazer upload da foto. Tente novamente.');
    } finally {
      setIsUploading(false);
      setOpen(false);
    }
  };

  const getProfileImageWithCacheBuster = () => {
    return profileImage === ProfileIconSVG ? profileImage : `${profileImage}?t=${new Date().getTime()}`;
  };

  useEffect(() => {
    handleProfile();
    
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) setOpen(false);
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleProfile]);

  if (!user) return null;

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
          <li>Relatórios</li>
        </Menu>

        <ProfileIcon ref={profileRef}>
          <div 
            onClick={() => !isUploading && setOpen(!open)}
            style={{ position: 'relative', cursor: isUploading ? 'wait' : 'pointer' }}
          >
            <img
              src={getProfileImageWithCacheBuster()}
              alt="Foto de perfil"
              draggable="false"
              style={{ 
                borderRadius: "50%", 
                width: 40, 
                height: 40,
                opacity: isUploading ? 0.7 : 1,
                filter: isUploading ? 'grayscale(50%)' : 'none',
                objectFit: 'cover'
              }}
            />
            {isUploading && <div style={loadingStyle}>...</div>}
          </div>
          
          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
          />

          {open && (
            <Dropdown>
              <li 
                onClick={handleFileSelect}
                style={{ pointerEvents: isUploading ? 'none' : 'auto', opacity: isUploading ? 0.6 : 1 }}
              >
                {isUploading ? 'Enviando...' : 'Alterar foto de perfil'}
              </li>
              <li 
                id="logout" 
                onClick={handleLogout}
                style={{ pointerEvents: isUploading ? 'none' : 'auto', opacity: isUploading ? 0.6 : 1 }}
              >
                Sair da conta
              </li>
            </Dropdown>
          )}
        </ProfileIcon>
      </Right>
    </NavbarContainer>
  );
}
