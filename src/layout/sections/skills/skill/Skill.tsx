import React from 'react';

import styled from "styled-components";
import {Icon} from '../../../../components/icon/Icon';

type SkillPropsType = {
    iconID: string
    skillTitle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconID={props.iconID}/>
            {/*'main-skill-1'*/}
            {/*Product Design*/}
            <StyledSkillTitle>{props.skillTitle}</StyledSkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: #cdeae0;
`

const StyledSkillTitle = styled.h3`

`

