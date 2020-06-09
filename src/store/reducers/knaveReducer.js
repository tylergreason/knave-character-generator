const defaultState = {
    traits:{}, 
    abilities:'',
    inventory:[],
    stats:{}
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
        case 'GENERATE_TRAIT': 
            return state = {
                ...state, 
                traits: {
                    ...state.traits, 
                    [action.trait]: action.newValue
                }
            }
        case 'GENERATE_INVENTORY': 
            return state = {
                ...state, 
                inventory: action.inventory,
                stats: {
                    ...state.stats, 
                    armorDefense: action.armorDefense
                }
            }
        case 'GENERATE_STATS':
            return state = {   
                ...state, 
                stats: action.stats
        }
        case 'SET_ARMOR_STATS': 
            return state = {
                ...state, 
                stats: {
                    ...state.stats, 
                    armorBonus: action.armorBonus, 
                    armorDefense: action.armorDefense
                }
            }
        default: 
            return state 
    }
}

export default knave; 