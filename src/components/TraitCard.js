import React from 'react' 
import styled from 'styled-components'
import {ListStyle, ListItemName, ListItemValue} from '../styling/generaStyles'


const TraitCardStyling = styled(ListStyle)`
    /* font-size: 2rem;
    border-bottom: 1px solid black;
    text-transform: capitalize;
    display: flex; 
    flex-flow: row; 
    justify-content: space-around; */
    &:hover {
        cursor: pointer;
    }
`

const SpanLeft = styled(ListItemName)``

const SpanRight = styled(ListItemValue)`
        width: 40%;
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