import React, { Component } from 'react' 
import {connect} from 'react-redux'
import InventoryCard from './InventoryCard'
import styled from 'styled-components'
import { mainComponentStyle } from '../styling/generaStyles'
import { mainHeaderStyle } from '../styling/generaStyles'

const InventoryContainer = styled.div`
    ${mainComponentStyle()}
`

const InventoryHeader = styled.h1`${mainHeaderStyle()}`
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


    render(){
        return(
            <InventoryContainer>
                <InventoryHeader>
                    Inventory
                </InventoryHeader>
                {this.renderInventoryCards(this.props.inventory)}
            </InventoryContainer>
        )
    }
}
const mapStateToProps = state => {
    return {
        inventory: state.knave.inventory
    }
}
export default connect(mapStateToProps,{})(Inventory); 