import React from 'react';
import Navbar from "./../Navbar/Navbar";
import { Herocontainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements";
import Sidebar from "./../Sidebar/Sidebar";
import { useState } from "react";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Herocontainer>
            <Navbar toggle={toggle} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Juhan's Gretest Pizza Ever</HeroH1>
                    <HeroP>Ready In 60 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </Herocontainer>

    );
};

export default Hero;