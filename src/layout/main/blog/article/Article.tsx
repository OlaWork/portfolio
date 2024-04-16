import React from 'react';
import styled from "styled-components";

type ArticlePropsType = {
    text: string
    src: string
    link?: string
}

export const Article = (props:ArticlePropsType) => {
    return (
        <StyledArticle>
            <Image src={props.src} alt=""/>
            <Text>{props.text}</Text>
            <Link href={"#"}>{props.link}</Link>
        </StyledArticle>
    );
};


const StyledArticle = styled.div`
    background-color: rgba(250, 250, 165, 0.82);
    //width: 40%;
    max-width: 384px;
    width: 100$;
`

const Image = styled.img`
    width: 100%;
    height: 279px;
    object-fit: cover;

`

const Text = styled.p`

`

const Link = styled.a`

`

