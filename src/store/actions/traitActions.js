import { traits } from '../../data'


// generate all traits 
export const generateTraits = () => {
    // create return object 
    let newTraits = {}; 
    for (const trait in traits){
        // find list length 
        let l = traits[trait].length-1; 
        // find random value in list length 
        let value = Math.floor(Math.random()*l)
        // set the newTrait's object's trait to the random trait
        newTraits[trait] = traits[trait][value];
    }
    return {type: 'GENERATE_TRAITS', traits:newTraits}
}

export const generateTrait = trait => {
    // find length of the array for the trait to be generated 
    let l = traits[trait].length; 
    // find a new trait to return 
    let value = Math.floor(Math.random()*l)
    let newTrait = traits[trait][value]
    return {type: 'GENERATE_TRAIT', trait: trait, newValue:newTrait}
}