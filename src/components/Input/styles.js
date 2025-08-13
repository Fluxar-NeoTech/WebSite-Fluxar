import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid #f39c12;
    border-radius: 7px;
    padding: 12px 15px;
    width: 420px;

    transition: box-shadow 0.3s;

    &:focus-within {
      border-color: rgba(243, 156, 18, 0.6);
      box-shadow: 0 0 5px rgba(243, 156, 18, 0.6);
    }

    @media ${breakpoints.lg} {
        width: 300px;
    }
`;

export const Icon = styled.span`
  color: #f39c12;
  display: flex;
  align-items: center;
  margin-right: 8px;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  border: none;
  font-size: 18px;
  color: #333;
  background: transparent;
  width: 100%;
  padding: none;

  &::placeholder {
    color: #f39c12;
  }

  &:focus {
    outline: none;
  }
`;