import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <SlyledFooter>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Copyright>© 2021 Templates Jungle. All rights reserved</Copyright>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"facebook"} width={"20"} height={"20"}/>
                        </SocialIconLink>
                    </SocialItem><SocialItem>
                    <SocialIconLink>
                        <Icon iconId={"twitter"} width={"20"} height={"20"}/>
                    </SocialIconLink>
                </SocialItem><SocialItem>
                    <SocialIconLink>
                        <Icon iconId={"instagram"} width={"20"} height={"20"}/>
                    </SocialIconLink>
                </SocialItem><SocialItem>
                    <SocialIconLink>
                        <Icon iconId={"pinterest"} width={"20"} height={"20"}/>
                    </SocialIconLink>
                </SocialItem><SocialItem>
                    <SocialIconLink>
                        <Icon iconId={"dribble"} width={"20"} height={"20"}/>
                    </SocialIconLink>
                </SocialItem><SocialItem>
                    <SocialIconLink>
                        <Icon iconId={"youtube"} width={"20"} height={"20"}/>
                    </SocialIconLink>
                </SocialItem>
                </SocialList>
            </FlexWrapper>
        </SlyledFooter>
    );
};


const SlyledFooter = styled.footer`
    background-color: #D6D9DD;

`
const SocialList = styled.ul`
    display: flex;
    gap: 25px
`

const SocialItem = styled.li`

`
const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`