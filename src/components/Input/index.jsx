import { useState } from 'react';
import { InputContainer, Icon, StyledInput, ToggleButton } from "./styles";
import EyeIcon from "../../assets/eye_icon.svg";
import ClosedEyeIcon from "../../assets/closed_eye_icon.svg";

export default function Input({ placeholder, value, onChange, type, icon, width = "100%" }) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <InputContainer width={width}>
            <Icon>
                <img
                    src={icon}
                    alt=""
                    style={{ width: 20, height: 20 }}
                />
            </Icon>
            <StyledInput
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
            {isPassword && (
                <ToggleButton 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                    <img 
                        src={showPassword ? ClosedEyeIcon : EyeIcon} 
                        alt="" 
                        style={{ width: 20, height: 20 }}
                    />
                </ToggleButton>
            )}
        </InputContainer>
    )
}