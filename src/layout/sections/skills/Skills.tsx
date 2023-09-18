import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import IconSprite from '../../../assets/images/icons/icons-sprite.svg'
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {FlexWrapper} from '../../../components/FlexWrapper';


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
                <Skill iconID={'main-skill-1'} skillTitle={'Product Design'}/>
            </FlexWrapper>
            {/*<Skill>*/}
            {/*    <Icon iconID={'main-skill-1'}/>*/}
            {/*    <SkillTitle>Product Design</SkillTitle>*/}
            {/*</Skill>*/}
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #c6dbee;

`