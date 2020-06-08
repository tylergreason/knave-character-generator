const defaultState = {
    traits:'', 
    abilities:'',
    inventory:''
}


const knave = (state=defaultState, action) => {
    switch(action.type){
        case 'GENERATE': 
            return state = {
                ...state
            }
        case 'GENERATE_ABILITY_SCORES':
            return state = {
                ...state, 
                abilities: action.abilities
            }
        default: 
            return state 
    }
}

export default knave; 