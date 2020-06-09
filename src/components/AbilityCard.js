import React from 'react'
import styled from 'styled-components'
import {listStyle} from '../styling/generaStyles'

const AbilityCardStyling = styled.div`
    ${listStyle()}
    justify-content:space-center;
`

const AbilityTitle = styled.span `
    width: 40%;
text-align: center;
text-align: left; 
`

const AbilityValue = styled.span `
    /* width: 20%; */
    text-align: right;
`

const AbilityCard = props => {
    return(
        <AbilityCardStyling>
            {/* <AbilityValue>
                {props.abilityValue}
            </AbilityValue> */}
            <AbilityTitle>
                 {props.abilityName}
            </AbilityTitle>
            <AbilityValue>
                {props.abilityValue} / 
                {props.abilityValue+10}
            </AbilityValue>
        </AbilityCardStyling>
    )
}

export default AbilityCard
