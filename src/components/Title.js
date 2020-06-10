import React from 'react' 
import { SubHeader } from '../styling/generaStyles'
import styled from 'styled-components'
const TitleStyle = styled.h1`
    margin: auto;
    text-align: center; 
    font-size: 4rem; 
    cursor: pointer;  
    background-color: rgba(226,183,105,0.3);
    border-bottom: 5px solid black;
    `

const Title = (props) => {
    return (
        <>
        <TitleStyle
            onClick={() => props.onClick()}
        >
            {props.title}
        <SubHeader>{props.subtext}</SubHeader>
        </TitleStyle>
        </>
    )
}

export default Title