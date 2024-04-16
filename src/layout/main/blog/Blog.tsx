import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionSubtitle} from "../../../components/SectionSubtitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Article} from "./article/Article";
import parfume from "./../../../assets/images/parfume2.jpg"
import calendar from "./../../../assets/images/calendar.jpg"
import team from "./../../../assets/images/team.jpg"

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle>Blog Posts</SectionTitle>
            <SectionSubtitle>Things that I can do for my clients. Just make your good trust I love to provide quality
                works.</SectionSubtitle>
            <FlexWrapper justify={"space-around"}>
                <Article text={"Why should we invest more in branding first?"} src={parfume}/>
                <Article text={"Top 100 most beautiful t-shirt print design"} src={calendar}/>
                <Article text={"Best rules to follow for achieving business goals"} src={team}/>
            </FlexWrapper>
        </StyledBlog>
    );
};


const StyledBlog = styled.section`
    max-height: 100vh;
    background-color: rgba(160, 216, 243, 0.82);
    
`