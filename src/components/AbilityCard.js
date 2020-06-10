import React from 'react'
import styled from 'styled-components'
import {ListStyle, ListItemName, ListItemValue} from '../styling/generaStyles'

const AbilityCardStyling = styled(ListStyle)`
    justify-content:space-center;
    `

const AbilityTitle = styled(ListItemName)``
const AbilityValue = styled(ListItemValue)``

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
