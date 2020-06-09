import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import TraitCard from './TraitCard'
import { generateTrait } from '../store/actions/traitActions'

class Traits extends Component {

    // function to make trait cards for each trait 
    renderTraitCards = traits => {
        return Object.keys(traits).map((key, value) => {
            // console.log(key)
            // console.log(traits[key])
            return <TraitCard 
                key={key}
                traitName={key}
                traitValue={traits[key]}
                handleClick={() =>this.props.generateTrait(key)}
            ></TraitCard>
        })
    }

    render(){
        return(
            <>
                <h1>
                    Traits
                    {/* <br></br> */}
                    {this.renderTraitCards(this.props.traits)}
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
export default connect(mapStateToProps, { generateTrait })(Traits)