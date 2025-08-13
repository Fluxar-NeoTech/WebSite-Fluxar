import { InputContainer, Icon, StyledInput } from "./styles";

export default function Input({ placeholder, value, onChange, type, icon }) {
    return (
        <InputContainer>
            <Icon>
                <img
                src={icon}
                alt="email icon"
                style={{ width: 20, height: 20 }}
            />
            </Icon>
            <StyledInput
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </InputContainer>
    )
}