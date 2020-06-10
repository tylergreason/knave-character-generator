import React from 'react'
import styled from 'styled-components'
import {ListStyle, ListItemName, ListItemValue} from '../styling/generaStyles'

const InventoryCardStyling = styled(ListStyle)``
const ItemTitle = styled(ListItemName)`
    width: 85%; 
    `

const ItemQualitySpan = styled.span`
    font-size: 1rem;
    font-style: italic;
    `

// function to decide what data to render from an item 
const renderItemData = item => {
    let string = item['name']; 
    let itemQualities = '(';
    Object.keys(item).forEach((i, index) => {
        if (item[i] !== 0 && i !== 'name' && i !== 'slot'){
                itemQualities += `${i}: ${item[i]}, `
        }
    })
    if (item.slot > 1){
        itemQualities += `${item.slot} slots, `
    }
    // 
    itemQualities = itemQualities.substring(0, itemQualities.length-2);
    if (itemQualities.length > 1){
        return <ItemTitle> - {string}
        <ItemQualitySpan>{itemQualities + ')'}</ItemQualitySpan>
        </ItemTitle> 
    }else{
        return <ItemTitle> - {string}
            <ItemQualitySpan></ItemQualitySpan>
        </ItemTitle>
    }
}

const InventoryCard = props => {
    return (
        <InventoryCardStyling>
            {renderItemData(props.item)}
        </InventoryCardStyling>
    )
}

export default InventoryCard; 