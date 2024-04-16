import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/man.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionSubtitle} from "../../../components/SectionSubtitle";

export const Hero = () => {
    return (
        <StyledHero>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Maintitle>Frotend developer</Maintitle>
                    <Name>Hello I’m Ola Krivoshapco</Name>
                    <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla ullamcorper tinci.</SectionSubtitle>
                </div>
                <Photo src={photo} alt="avatar"/>
            </FlexWrapper>
        </StyledHero>
    );
};

const StyledHero = styled.div`
    min-height: 100vh;
    background-color: #efdddd;
`
const Maintitle = styled.h1`

`

const Photo = styled.img`
    width: 700px;
    height: 450px;
    object-fit: cover;

`

const Name = styled.h2`
`