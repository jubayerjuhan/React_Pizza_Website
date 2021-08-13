import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;


`;

export const Navlink = styled(Link)`
    color: #ffff;
    display: flex;
    font-size: 3rem;
    font-weight: 600;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        position: absolute;
        top: 10px;
        left: 25px;
        font-size: 2rem;
    }
`

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`
