import React, { Component } from 'react' 
import {connect} from 'react-redux'
class Inventory extends Component {
    render(){
        return(
            <>
                <h1>
                    Inventory
                </h1>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        inventory: state.knave.inventory
    }
}
export default connect(mapStateToProps,{})(Inventory); 