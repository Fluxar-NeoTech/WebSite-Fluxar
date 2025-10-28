import { CustomButton } from './styles.js';

export default function Button({ children, onClick, background, backgroundHover, type, width, marginTop = 0 }) {
    return (
        <CustomButton
        onClick={onClick}
        type={type}
        $width={width}
        $background={background}
        $backgroundHover={backgroundHover}
        $marginTop={marginTop}
        >
            {children}
        </CustomButton>
    )
}