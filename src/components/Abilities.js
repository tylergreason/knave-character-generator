import React, { Component } from 'react' 
import { connect } from 'react-redux'

class Abilities extends Component {
    render(){
        return(
            <>
                <h1>
                    Abilities
                </h1>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        abilities: state.knave.abilities
    }
}


export default connect(mapStateToProps, {})(Abilities); 