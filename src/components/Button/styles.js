import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const CustomButton = styled.button`
    background: ${props => props.$background || "#3498db"};
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    background-size: 200% auto;
    width: ${props => props.width || "300px"};
    transition: background-position 0.3s ease;
    margin-top: ${props => props.$marginTop}px;

    &:hover {
        background-position: right center;
    }

    &:active {
        background-position: left center;
    }

    @media ${breakpoints.lg} {
        width: 200px;
    }
`;