import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Icon iconId={"quote"}/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor.</Text>
            <Name>Emma Brown</Name>
            <Position>CEO - Squirrel Sweets</Position>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    max-height: 100vh;
    background-color: #d295f4;
`

const Name = styled.span`

`

const Text = styled.span`

`

const Position = styled.span`

`