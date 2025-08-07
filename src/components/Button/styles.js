import styled from "styled-components";

export const CustomButton = styled.button`
    background-color: ${props => props.$backgroundColor || "#3498db"};
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    margin-top: ${props => props.marginTop}px;

    &:hover {
        background-color: ${props => props.$backgroundColorHover || "#2980b9"};
    }
    
    &:active {
        background-color: ${props => props.$backgroundColor || "#2980b9"};
    }
`;