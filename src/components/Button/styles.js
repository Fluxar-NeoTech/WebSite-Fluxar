import styled from "styled-components";

const CustomButton = styled.button`
    background-color: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #2980b9;
    }
`;

export { CustomButton }