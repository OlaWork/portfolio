import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Navigation} from "../../../components/Navigation";


const portfolioItems = ["All", "Landing page", "React", "SPA"]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle>Portfolio</SectionTitle>
            <Navigation menuItems={portfolioItems}/>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`

`