import styled from "styled-components";

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
    }
`;