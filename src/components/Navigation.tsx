import React from 'react';
import styled from "styled-components";

export const Navigation = (props:{menuItems: Array<string>}) => {
    return (
        <StyledNavigation>
            <ul>
                {props.menuItems.map((item,index)=> {
                   return <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                })}
            </ul>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`