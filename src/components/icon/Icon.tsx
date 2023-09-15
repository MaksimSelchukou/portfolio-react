import React from 'react';
import iconsSprite from './../../assets/images/icons/icons-sprite.svg'

type IconType = {
    iconID: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconType) => {
    return (
        <svg width={props.width || "65"}
             height={props.height || "48"}
             viewBox={props.viewBox || "0 0 65 48"}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconID}`}/>
        </svg>
    );
};

// <svg width="65" height="48" viewBox="0 0 65 48" fill="none" xmlns="http://www.w3.org/2000/svg">

