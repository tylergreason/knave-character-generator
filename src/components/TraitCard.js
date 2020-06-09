import React from 'react' 
import styled from 'styled-components'

const TraitCardStyling = styled.div`
    font-size: 2rem;
    border-bottom: 1px solid black;
    /* text-align: center; */
    text-transform: capitalize;
    display: flex; 
    flex-flow: row; 
    justify-content: space-around;
`

const SpanLeft = styled.span`
    width: 40%;
    /* text-align: left;  */
`

const SpanRight = styled.span` 
    width: 40%;
    text-align: right; 
`



const TraitCard = props => {
    return (
        <TraitCardStyling
            onClick={() => props.handleClick()}
            // onClick = {console.log('clicked')}
        >
            <SpanLeft>{props.traitName}</SpanLeft>
            <SpanRight>{props.traitValue}</SpanRight>
            {/* {`${props.traitName} : ${props.traitValue}`} */}
        </TraitCardStyling>
    )
}

export default TraitCard