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
        default: 
            return state 
    }
}

export default knave; 