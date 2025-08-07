import { CustomButton } from './styles.js';

function Button({ children, onClick, disabled }) {
    return (
        <CustomButton onClick={onClick} disabled={disabled}>
            {children}
        </CustomButton>
    )
}

export default Button