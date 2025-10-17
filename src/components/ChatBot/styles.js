import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to bottom, #f7b886, #c993f5);
  color: white;
  min-height: 94.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

export const Welcome = styled.div`
  text-align: center;
  width: 80%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  p {
    color: #fff;
    font-size: 20px;
    margin: 8px 0 0;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 16px 0;
    width: 100%;
  }

  button {
    background: #4a006e;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 16px 24px;
    max-width: 215px;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #5c0b8a;
    }
  }
`;

export const ChatContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  width: 70%;
  max-width: 900px;
  height: 65vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  overflow: hidden;
`;

export const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;

  .msg {
    padding: 10px 14px;
    border-radius: 18px;
    max-width: 70%;
    word-wrap: break-word;
  }

  .user {
    background: #4a006e;
    align-self: flex-end;
  }

  .bot {
    background: #FEFAFF;
    color: #2F2F2F;
    align-self: flex-start;
  }
`;

export const InputArea = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;

  input {
    flex: 1;
    padding: 12px 18px;
    border-radius: 25px;
    border: none;
    outline: none;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.9);
  }

  button {
    background: #4a006e;
    color: white;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #5c0b8a;
    }
  }
`;