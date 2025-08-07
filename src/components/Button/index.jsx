import { CustomButton } from './styles.js';

export default function Button({ children, onClick, backgroundColor, backgroundColorHover, type, width, marginTop = 0 }) {
    return (
        <CustomButton
        onClick={onClick}
        type={type}
        style={{ width: width }}
        $backgroundColor={backgroundColor}
        $backgroundColorHover={backgroundColorHover}
        marginTop={marginTop}
        >
            {children}
        </CustomButton>
    )
}