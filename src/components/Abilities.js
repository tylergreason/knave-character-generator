import React, { Component } from 'react' 
import { connect } from 'react-redux'
import styled from 'styled-components'
import {mainComponentStyle} from '../styling/generaStyles'
import { mainHeaderStyle } from '../styling/generaStyles'
import AbilityCard from './AbilityCard'
const AbilitiesContainer = styled.div`${mainComponentStyle()}`;
const AbilitiesHeader = styled.h1`${mainHeaderStyle()}`;

class Abilities extends Component {

    // function to render abilities 
    renderAbilityCards = abilities => {
        return Object.keys(abilities).map((key,value) => {
            return <AbilityCard
                abilityName={key}
                abilityValue={abilities[key]}
            ></AbilityCard>
        })
    }

    render(){
        return(
            <AbilitiesContainer>
                <AbilitiesHeader>
                    Abilities
                </AbilitiesHeader>
                {this.renderAbilityCards(this.props.abilities)} 
            </AbilitiesContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        abilities: state.knave.abilities
    }
}


export default connect(mapStateToProps, {})(Abilities); 