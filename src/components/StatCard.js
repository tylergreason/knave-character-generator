import React from 'react'; 
import styled from 'styled-components'
import {ListStyle, ListItemName, ListItemValue} from '../styling/generaStyles'


const StatCardStyled = styled(ListStyle)``
const StatTitle = styled(ListItemName)``
const StatValue = styled(ListItemValue)``


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