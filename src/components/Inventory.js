import React, { Component } from 'react' 
import {connect} from 'react-redux'
import InventoryCard from './InventoryCard'
import styled from 'styled-components'
import { ContainerStyle, HeaderStyle, SubHeader } from '../styling/generaStyles'

const InventoryContainer = styled(ContainerStyle)``
const InventoryHeader = styled(HeaderStyle)``
const InventorySubText = styled(SubHeader)``


class Inventory extends Component {
    // function to render inventory cards 
    renderInventoryCards = inventory => {
            return inventory.map((item, index) => {
                    return <InventoryCard 
                        key={index}
                        item={item}
                    ></InventoryCard>
            })
    }

    // function to find total inventory slots taken 
    usedInventorySlots = (inventory) => {
        let total = 0; 
        inventory.forEach(item => total+=item.slot); 
        return total + '/' + this.props.inventorySlots; 
    }

    render(){
        return(
            <InventoryContainer>
                <InventoryHeader>
                    Inventory ({this.usedInventorySlots(this.props.inventory)})
                    <InventorySubText>
                        Each item takes up one slot unless otherwise noted
                    </InventorySubText>
                </InventoryHeader>
                {this.renderInventoryCards(this.props.inventory)}
            </InventoryContainer>
        )
    }
}
const mapStateToProps = state => {
    return {
        inventory: state.knave.inventory,
        // get constitution defense to use for showing available inventory slots
        inventorySlots: state.knave.abilities.Constitution+10
    }
}
export default connect(mapStateToProps,{})(Inventory); 