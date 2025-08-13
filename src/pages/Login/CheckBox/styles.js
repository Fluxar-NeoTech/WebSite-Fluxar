import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  width: 420px;
`;

export const Wrapper = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    user-select: none;
`;

export const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 18px;
  height: 18px;
  border: 2px solid #f39c12;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(243, 156, 18, 0.4);
  }

  &:checked {
    background-color: #f39c12;
    border-color: #f39c12;
  }

  &:checked::after {
    content: '✓';
    color: white;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    font-weight: bold;
  }
`;
