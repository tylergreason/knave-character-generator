import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addInventoryItem } from '../store/actions/inventoryActions'
class AddItem extends Component {
    return(){
        render(
            <></>
        )
    }
}

export default connect({addInventoryItem})(AddItem)