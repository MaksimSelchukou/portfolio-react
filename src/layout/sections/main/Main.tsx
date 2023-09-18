import React from 'react';
import mainPhoto from '../../../assets/images/icons/main-photo.png'
import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';



export const Main = () => {
    return (
        <FlexWrapper justify={'space-around'} align={'center'}>
            <div>
                <span>Hello</span>
                <span>
                I’m Gleb
                Kostrubov
            </span>
                <p>I've been doing web design, front-end and back-end development for a year now. Do you need a website
                    design, site layout, or maybe a turnkey website? Then contact me
                </p>
                <button>Contact me</button>
            </div>
            <Photo src={mainPhoto} alt=""/>
        </FlexWrapper>
    );
};

const Photo = styled.img`
  width: 632px;
  height: 674px;
`

