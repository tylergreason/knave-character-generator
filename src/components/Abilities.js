import React, { Component } from 'react' 
import { connect } from 'react-redux'
import styled from 'styled-components'
import {ContainerStyle, HeaderStyle, SubHeader} from '../styling/generaStyles'
import AbilityCard from './AbilityCard'

const AbilitiesContainer = styled(ContainerStyle)``;
const AbilitiesHeader = styled(HeaderStyle)``
const AbilitiesSubText = styled(SubHeader)``

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
                    <AbilitiesSubText>
                        Ability bonus/defense
                    </AbilitiesSubText>
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