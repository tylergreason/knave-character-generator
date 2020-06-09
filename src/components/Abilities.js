import React, { Component } from 'react' 
import { connect } from 'react-redux'
import styled from 'styled-components'
import {mainComponentStyle} from '../styling/generaStyles'
import { mainHeaderStyle } from '../styling/generaStyles'

const AbilitiesContainer = styled.div`${mainComponentStyle()}`;
const AbilitiesHeader = styled.h1`${mainHeaderStyle()}`;

class Abilities extends Component {
    render(){
        return(
            <AbilitiesContainer>
                <AbilitiesHeader>
                    Abilities
                </AbilitiesHeader>
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