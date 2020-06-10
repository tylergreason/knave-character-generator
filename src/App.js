import React, { Component } from 'react';
import { connect } from 'react-redux'
import Title from './components/Title'
import Traits from './components/Traits'
import Abilities from './components/Abilities'
import Inventory from './components/Inventory'
import Stats from './components/Stats'
import styled from 'styled-components'
// import './App.css';

// actions 
import { generateAbilityScores } from './store/actions/abilityActions'
import { generateTraits } from './store/actions/traitActions'
import { generateInventory } from './store/actions/inventoryActions'
import { generateStats } from './store/actions/statActions'
import { MainFlexContainer } from './styling/generaStyles'

const MainContainer = styled(MainFlexContainer)``

class App extends Component {
    componentDidMount = () => {
        console.log('App mounted')
        this.generateKnave(); 
    }
    
    generateKnave = () => {
        this.props.generateInventory(); 
        this.props.generateAbilityScores();
        this.props.generateTraits(); 
        this.props.generateStats(); 
    }
    
    render(){
        return (
            <div className="App">
                <Title 
                    title='Knave Character Generator' 
                    subtext='click here to generate a new knave' 
                    onClick={this.generateKnave}
                ></Title>
                <Stats></Stats>
                <MainContainer>
                    <Abilities></Abilities>
                    <Inventory></Inventory>
                    <Traits></Traits>
                </MainContainer>    
                </div>
            );
        }
}


// map state to app's props so it can pass knave's attributes to the appropriate components 
const mapStateToProps = state => {
    return {
        knave:state.knave
    }
}


export default connect(mapStateToProps, { generateAbilityScores, generateTraits, generateInventory, generateStats })(App); 
// export default App;
