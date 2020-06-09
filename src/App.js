import React, { Component } from 'react';
import { connect } from 'react-redux'
import Title from './components/Title'
import Traits from './components/Traits'
import Abilities from './components/Abilities'
import Inventory from './components/Inventory'
import Stats from './components/Stats'

// import './App.css';

// actions 
import { generateAbilityScores } from './store/actions/abilityActions'
import { generateTraits } from './store/actions/traitActions'
import { generateInventory } from './store/actions/inventoryActions'
import { generateStats } from './store/actions/statActions'

class App extends Component {
    componentDidMount = () => {
        console.log('App mounted')
        this.props.generateInventory(); 
        this.props.generateAbilityScores();
        this.props.generateTraits(); 
        // debugger
        this.props.generateStats(); 
    }
    
    
    render(){
        return (
            <div className="App">
                <Title title='Knave Character Generator'></Title>
                <Stats></Stats>
                <Abilities></Abilities>
                <Inventory></Inventory>
                <Traits></Traits>
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
