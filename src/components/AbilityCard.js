import React from 'react'
import styled from 'styled-components'
import {listStyle} from '../styling/generaStyles'

const AbilityCardStyling = styled.div`
    ${listStyle()}
`

const AbilityTitle = styled.span `
    width: 40%;
`

const AbilityValue = styled.span `
    width: 40%;
    text-align: right; 
`

const AbilityCard = props => {
    return(
        <AbilityCardStyling>
            <AbilityTitle>
                {props.abilityName}
            </AbilityTitle>
            <AbilityValue>
                {props.abilityValue}
            </AbilityValue>
        </AbilityCardStyling>
    )
}

export default AbilityCard
