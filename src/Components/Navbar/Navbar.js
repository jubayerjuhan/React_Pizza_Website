import React, { useContext } from 'react';
import { Nav, NavIcon, Navlink, Bars } from "./NavbarElements";
import { UserContext } from "./../../App";

const Navbar = ({toggle, isOpen}) => {
    console.log(toggle)
    console.log(isOpen)
    return (
        <>
            <Nav>
                <Navlink to= '/'>Juhan's Pizza</Navlink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars onClick={toggle}></Bars>
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;