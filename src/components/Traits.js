import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { generateTrait } from '../store/actions/traitActions'
import TraitCard from './TraitCard'
import styled from 'styled-components'
import {mainComponentStyle} from '../styling/generaStyles'

    // styled container for traits 
    const TraitContainer = styled.div`
        /* background-color: rgb(100,100,100); */
        /* border: 1px solid black;
        border-radius: 10px; 
        padding: 10px; 
        width: 50%;
        margin: auto;  */
        ${mainComponentStyle()}
    `

    const TraitHeader = styled.h1`
        text-align: center;
        text-transform: uppercase;
    `

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
            <TraitContainer>
                <TraitHeader>
                    Traits
                </TraitHeader>
                    {this.renderTraitCards(this.props.traits)}
            </TraitContainer>
        )
    }
}
const mapStateToProps = state => {
    return {
        traits: state.knave.traits
    }
}
export default connect(mapStateToProps, { generateTrait })(Traits)