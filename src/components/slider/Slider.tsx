import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import photoBrush from "../../assets/images/brush.jpg"
import photoBox from "../../assets/images/box.jpg"
import photoShirt from "../../assets/images/shirt.jpg"
import {FlexWrapper} from "../FlexWrapper";
import {SectionSubtitle} from "../SectionSubtitle";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper align={"center"}>
                <Icon iconId={"left-arrow"}/>
                <Slide>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Photo src={photoBrush} alt="brush"/>
                    <Icon iconId={"brush"}/>
                    <Title>Branding Design</Title>
                    <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet
                        sed sagittis.</SectionSubtitle>
                </Slide>

                <Slide>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Photo src={photoShirt} alt="shirt"/>
                    <Icon iconId={"brush"}/>
                    <Title>Branding Design</Title>
                    <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet
                        sed sagittis.</SectionSubtitle>
                </Slide>

                <Slide>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Photo src={photoBox} alt="box"/>
                    <Icon iconId={"brush"}/>
                    <Title>Branding Design</Title>
                    <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet
                        sed sagittis.</SectionSubtitle>
                </Slide>
                <Icon iconId={"right-arrow"}/>
            </FlexWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 1200px;
`

const Photo = styled.img`

`

const Slide = styled.div`
    max-width: 100%;
    text-align: center;
`

const Title = styled.p`

`

const Text = styled.p`

`


