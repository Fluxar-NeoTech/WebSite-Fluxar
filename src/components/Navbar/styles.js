import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #46005A;
    color: white;
    padding: 0.5rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;

    img {
        height: 40px;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;

    @media ${breakpoints.md} {
        display: none;
    }
`;

export const MenuItem = styled.li`
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    padding: 8px 16px;
    border-radius: 8px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 16px;
        right: 16px;
        height: 2px;
        background-color: ${props => props.active ? 'white' : 'transparent'};
        transition: background-color 0.2s;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    background: ${props => props.active ? 'transparent' : 'transparent'};
`;

export const ProfileIcon = styled.div`
    cursor: pointer;
    position: relative;
    
    img {
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }

    @media ${breakpoints.md} {
        display: none;
    }
`;

export const Dropdown = styled.ul`
    position: absolute;
    top: 50px;
    right: 0;
    background: white;
    color: black;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    list-style: none;
    padding: 10px 0;
    width: 160px;
    z-index: 100;

    li {
        padding: 10px 16px;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #f2f2f2;
        }
    }

    #logout {
        color: red;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media ${breakpoints.md} {
        gap: 1rem;
    }
`;

export const HiddenFileInput = styled.input`
    display: none;
`;

export const MobileMenuButton = styled.button`
    display: none;

    @media ${breakpoints.md} {
        display: flex;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }
`;

export const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background: #46005A;
    color: white;
    z-index: 2000;
    transition: right 0.3s ease-in-out;
    padding: 2rem 1.5rem;
    box-shadow: -4px 0 20px rgba(0,0,0,0.3);
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
`;

export const SidebarTitle = styled.h3`
    margin: 0;
    font-size: 1.2rem;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const SidebarMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const SidebarMenuItem = styled.li`
    padding: 1rem 0;
    cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    transition: all 0.2s;
    font-weight: 500;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        padding-left: 10px;
    }

    &:last-child {
        border-bottom: none;
    }

    ${props => props.active && `
        background: rgba(255, 255, 255, 0.1);
        padding-left: 10px;
    `}
`;

export const SidebarProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 1rem;
`;

export const SidebarProfileImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`;

export const SidebarProfileInfo = styled.div`
    flex: 1;
`;

export const SidebarProfileName = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 1.1rem;
`;

export const SidebarProfileEmail = styled.p`
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1999;
    display: ${props => props.isOpen ? 'block' : 'none'};
`;