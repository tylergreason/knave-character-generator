import React, { Component } from 'react';
import { connect } from 'react-redux'
import Title from './components/Title'
import Traits from './components/Traits'
import Abilities from './components/Abilities'
import Inventory from './components/Inventory'

// import './App.css';

// actions 
import { generateAbilityScores } from './store/actions/abilityActions'

class App extends Component {
    componentDidMount = () => {
        console.log('App mounted')
        this.props.generateAbilityScores();
    }


    render(){
        return (
            <div className="App">
            <Title title='Knave Character Generator'></Title>
            <Traits></Traits>
            <Abilities></Abilities>
            <Inventory></Inventory>
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


export default connect(mapStateToProps, { generateAbilityScores })(App); 
// export default App;
