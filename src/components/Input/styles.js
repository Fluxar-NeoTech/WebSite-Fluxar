import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const InputContainer = styled.div`
    position: relative;
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
  padding: 0;
  padding-right: ${props => props.isPassword ? '30px' : '0'};

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #333;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:-moz-ui-invalid {
    box-shadow: none;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  &:focus {
    outline: 2px solid #f39c12;
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  &:hover {
    opacity: 0.7;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;