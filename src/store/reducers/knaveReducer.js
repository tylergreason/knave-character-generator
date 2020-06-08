const defaultState = {
    traits:'', 
    abilities:'',
    inventory:''
}


const knave = (state=defaultState, action) => {
    switch(action.type){
        case 'GENERATE_KNAVE': 
            return state = {
                ...state
            }
        case 'GENERATE_ABILITY_SCORES':
            return state = {
                ...state, 
                abilities: action.abilities
            }
        case 'GENERATE_TRAITS': 
            return state = {
                ...state, 
                traits: action.traits
            }
        // case 'GENERATE_TRAIT': 
        //     return state = {
        //         ...state, 
        //         state.traits: {
        //             ...traits, 
        //             [action.trait]: action.newValue
        //         }
        //     }
        case 'GENERATE_INVENTORY': 
            return state = {
                ...state, 
                inventory: action.inventory
            }
        default: 
            return state 
    }
}

export default knave; 