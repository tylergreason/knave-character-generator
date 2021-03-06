import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { generateTrait } from '../store/actions/traitActions'
import TraitCard from './TraitCard'
import styled from 'styled-components'
import {ContainerStyle, HeaderStyle, SubHeader} from '../styling/generaStyles'

    // styled container for traits 
    const TraitContainer = styled(ContainerStyle)``

    const TraitHeader = styled(HeaderStyle)``

    const TraitSubText = styled(SubHeader)``

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
                    <TraitSubText>
                        Click to generate a new trait
                    </TraitSubText>
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