import styled from "styled-components";

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
`;

export const MenuItem = styled.li`
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    padding: 8px 16px;
    border-radius: 8px;
    position: relative;

    /* Underline apenas quando ativo */
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

    /* Remove o background quando ativo */
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
`;

export const HiddenFileInput = styled.input`
    display: none;
`;