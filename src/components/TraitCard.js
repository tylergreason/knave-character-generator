import React from 'react' 
import styled from 'styled-components'

const TraitCardStyling = styled.div`
    font-size: 2rem;
    border-bottom: 1px solid black;
    text-align: center;
    text-transform: capitalize;
`


const TraitCard = props => {
    return (
        <TraitCardStyling
            onClick={() => props.handleClick()}
            // onClick = {console.log('clicked')}
        >
            {`${props.traitName} : ${props.traitValue}`}
        </TraitCardStyling>
    )
}

export default TraitCard