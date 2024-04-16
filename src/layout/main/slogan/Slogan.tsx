import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <FlexWrapper direction={"column"} align={"center"}>
            <Title>Let’s work together</Title>
            <Text>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</Text>
            {/*<Button>Contact me</Button>*/}

            </FlexWrapper>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
    background-color: #D6D9DD;
    max-height: 20vh;
`
const Title = styled.span`
    font-size: 80px;

`
const Text = styled.p`
    font-size: 18px;
`