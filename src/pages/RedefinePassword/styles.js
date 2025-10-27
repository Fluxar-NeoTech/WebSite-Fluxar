import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #FEFAFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

export const Box = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 60px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 420px;
  text-align: center;

  h1 {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #2F2F2F;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  button {
    margin-top: 20px;
  }

  @media ${breakpoints.lg} {
    max-width: 320px;
  }

  @media ${breakpoints.md} {
    background: none;
    box-shadow: none;
  }
`;
