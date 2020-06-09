import React from 'react'
import styled from 'styled-components'

const InventoryCardStyling = styled.div`
    font-size: 2rem; 
`

// function to decide what data to render from an item 
const renderItemData = item => {
    let string = item['name']; 
    Object.keys(item).forEach(i => {
        if (item[i] !== 0 && i !== 'name' && i !== 'slot'){
            string += ` ${i} : ${item[i]}`
        }
    })
    return string; 
}

const InventoryCard = props => {
    return (
        <InventoryCardStyling>
            {renderItemData(props.item)}
            {/* {props.item.name} */}
        </InventoryCardStyling>
    )
}

export default InventoryCard; 