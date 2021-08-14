import styled from "styled-components";
import featurepic from '../../images/featured3.jpg';

export const FeatureContainer = styled.div`
    height: 100vh;
    max-height: 500px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),
    url(${featurepic});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1{
        padding-bottom: 1rem;
        font-size: clamp(2.5rem, 4rem, 4rem);
        line-height: 1;
    }

    p{
        padding-bottom: 2rem;
        font-size: clamp(1rem, 2rem, 1.5rem)
    }
`

export const FeatureBtn = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover{
        background: #e31837;
        color: #fff;
        transition: 0.2 ease-out;
        cursor: pointer;
    }
`