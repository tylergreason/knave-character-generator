import React, { Component } from 'react'; 
import { connect } from 'react-redux'

class Traits extends Component {
    render(){
        return(
            <>
                <h1>
                    Traits
                </h1>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        traits: state.knave.traits
    }
}
export default connect(mapStateToProps, {})(Traits)