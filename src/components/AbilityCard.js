import React from 'react'
import styled from 'styled-components'
import {listStyle, listStyle__ListItemName, listStyle__ListItemValue} from '../styling/generaStyles'

const AbilityCardStyling = styled.div`
    ${listStyle()}
    justify-content:space-center;
`

const AbilityTitle = styled.span `${listStyle__ListItemName()}`
const AbilityValue = styled.span `${listStyle__ListItemValue()}`

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
