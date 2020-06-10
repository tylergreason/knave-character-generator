import React from 'react' 
import styled from 'styled-components'

const TitleStyle = styled.h1`
    text-align: center; 
    margin: auto;
    font-size: 4rem; 
`
const Title = (props) => {
    return (
        <TitleStyle>
            {props.title}
        </TitleStyle>
    )
}

export default Title