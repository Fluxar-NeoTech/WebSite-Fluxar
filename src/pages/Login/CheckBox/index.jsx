import { Container, Wrapper, Checkbox } from "./styles"

export default function CheckBox({ checked, onChange, label = 'Salvar senha' }) {
    return (
        <Container>
            <Wrapper>
                <Checkbox type="checkbox" checked={checked} onChange={onChange} />
                {label}
            </Wrapper>
        </Container>
    )
}