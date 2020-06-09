import React from 'react'
import styled from 'styled-components'

const InventoryCardStyling = styled.div`
    font-size: 2rem; 
    border-bottom: 1px solid black; 
    color: rgb(100,100,100);
    &:hover{
        color: rgb(0,0,0);
        font-size: 2.2rem;
    }
`

const ItemNameSpan = styled.span`
    /* color:blue; */
`
const ItemQualitySpan = styled.span`
    font-size: 1.5rem;
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
    // 
    itemQualities = itemQualities.substring(0, itemQualities.length-2);
    if (itemQualities.length > 1){
        return <><ItemNameSpan>{string}</ItemNameSpan> <ItemQualitySpan>{itemQualities + ')'}</ItemQualitySpan></>;
    }else{
        return <ItemNameSpan>{string}</ItemNameSpan>
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