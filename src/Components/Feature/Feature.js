import React from 'react';
import { FeatureContainer, FeatureBtn } from './FeatureElements.js';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza Of The Day</h1>
            <p>Truffle Alfredo Sauce Top With 24 Carat Gold Dust.</p>
            <FeatureBtn>Order Now</FeatureBtn>
        </FeatureContainer>
    );
};

export default Feature;