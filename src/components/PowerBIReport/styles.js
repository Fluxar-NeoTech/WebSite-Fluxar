import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 0;
`;

export const NavbarSpacer = styled.div`
  height: 70px;
  width: 100%;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  color: #2F2F2F;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.p`
  color: #2F2F2F;
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
`;

export const DashboardContainer = styled.div`
  width: 80%;
  max-width: 1400px;
  height: 75vh;
  min-height: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.1),
    0 15px 35px rgba(0,0,0,0.1),
    0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.2);
  position: relative; /* 🔥 Adiciona containment */
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  border-radius: 20px;
  clip-path: inset(0 round 20px);
  -webkit-clip-path: inset(0 round 20px);
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #666;
  opacity: 0.8;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;