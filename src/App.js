import React from 'react';
import Title from './components/Title'
import Traits from './components/Traits'
import Abilities from './components/Abilities'
import Inventory from './components/Inventory'

// import './App.css';

function App(props) {
    return (
            <div className="App">
                <Title title='Knave Character Generator'></Title>
                <Traits></Traits>
                <Abilities></Abilities>
                <Inventory></Inventory>
            </div>
    );
}


// map state to app's props so it can pass knave's attributes to the appropriate components 
// const mapStateToProps = state => {
//     return {
//         knave:state.knave
//     }
// }


// export default connect(mapStateToProps, {})(App); 
export default App;
