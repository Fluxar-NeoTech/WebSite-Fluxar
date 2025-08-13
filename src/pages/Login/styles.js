import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const Right = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
    width: 75%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #46005a, #720892ff);
    
    & .logo {
        font-size: 50px;
        color: #3498db;
    }

    @media ${breakpoints.lg} {
        & img {
            width: 300px;
        }
    }

    @media ${breakpoints.md} {
        display: none;
    }
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 320px;
    
    & h2 {
        font-family: Montserrat, sans-serif;
        font-size: 50px;
        color: #46005a;
        text-align: center;
    }

    @media ${breakpoints.lg} {
        & h2 {
            font-size: 40px;
        }
    }

    @media ${breakpoints.sm} {
        height: 350px;
    }
`;