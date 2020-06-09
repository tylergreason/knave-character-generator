import React from 'react'; 
import styled from 'styled-components'
import {listStyle, listStyle__ListItemValue, listStyle__ListItemName} from '../styling/generaStyles'

const StatCardStyled = styled.div`${listStyle()}`
const StatTitle = styled.span `${listStyle__ListItemName()}`
const StatValue = styled.span `${listStyle__ListItemValue()}`


const StatCard = props => {
    return (
        <StatCardStyled>
            <StatTitle>
                {props.statName}
            </StatTitle>
            <StatValue>
                {props.statValue}
            </StatValue>
        </StatCardStyled>
    )
}

export default StatCard