import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionSubtitle} from "../../../components/SectionSubtitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper direction={"row"}>
                <FlexWrapper direction={"column"} justify={"space-around"}>
                    <SectionTitle>Why Hire Me ?</SectionTitle>
                    <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl
                        posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse
                        risus. Vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing
                        elit eu placera.</SectionSubtitle>
                </FlexWrapper>
                <div>
                    {/*<Button>Hire Me</Button>*/}
                    {/*<Button>Download CV</Button>*/}
                </div>
                <FlexWrapper>
                    <SectionTitle>My Skills</SectionTitle>
                    <SkillItem>
                        <Skill>
                            <SkillTitle>Adobe Photoshop</SkillTitle>
                            <SkillPercent>96%</SkillPercent>
                        </Skill>
                        <SkillBar/>
                    </SkillItem>
                    <SkillItem>
                        <SkillTitle>Adobe Illustrator</SkillTitle>
                        <SkillPercent>92%</SkillPercent>
                        <SkillBar/>
                    </SkillItem>
                    <SkillItem>
                        <SkillTitle>Adobe After Effect</SkillTitle>
                        <SkillPercent>85%</SkillPercent>
                        <SkillBar/>
                    </SkillItem>
                    <SkillItem>
                        <SkillTitle>Adobe InDesign</SkillTitle>
                        <SkillPercent>94%</SkillPercent>
                        <SkillBar/>
                    </SkillItem>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    background-color: #E5E9ED;
    min-height: 30vh;
`

const SkillItem = styled.div`

`

const SkillTitle = styled.span`
    
`

const Skill = styled.div`
    display: flex;
`

const SkillPercent = styled.p`

`

const SkillBar = styled.span`
    border: 1px solid red;
    width: 300px;
    background-color: red;
`