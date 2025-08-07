import { Wrapper, Checkbox } from "./styles"

export default function CheckBox({ checked, onChange, label = 'Salvar senha' }) {
    return (
        <Wrapper>
        <Checkbox type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </Wrapper>
    )
}