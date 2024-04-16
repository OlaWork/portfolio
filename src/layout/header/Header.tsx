import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Navigation} from "../../components/Navigation";

const items = ["Home", "About", "Services", "Store", "Blog", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation menuItems={items}/>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #f7fcb9;
    display: flex;
    justify-content: space-between;
`