import { abilityScoreTitles } from '../../data'

// generate one score 
const rollAbilityScore = () => {
    // return lowest of 3 D6 rolls
    let scores = []; 
    for (let i = 0; i < 3; i++){
        let num = Math.floor(Math.random()*6)+1; 
        scores.push(num); 
    }
    // sort scores array and return smallest value 
    scores.sort(); 
    return scores[0]; 
}


// function to generate all ability scores 
export const generateAbilityScores = () => {
    console.log('generateAbilityScores() fired')
    // make abilities object that will hold ability scores, then set the state's ability scores to that object with dispatch 
    let abilities = {}; 
    abilityScoreTitles.forEach(ability => abilities[ability] = rollAbilityScore())
    return {type:'GENERATE_ABILITY_SCORES', abilities:abilities};
}