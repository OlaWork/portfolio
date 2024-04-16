import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionSubtitle} from "../../../components/SectionSubtitle";

export const Experience = () => {
    return (
        <StyledExperience>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>What I Offer</SectionTitle>
                <SectionSubtitle>Things that I can do for my clients. Just make your good trust I love to provide quality
                    works.</SectionSubtitle>
                <Slider></Slider>
            </FlexWrapper>
        </StyledExperience>
    );
};


const StyledExperience = styled.section`

`

const Text = styled.span`

`