export const generateStats = () => {
    let name = 'Test Name';
    let armorDefense = 0; 
    let armorBonus = armorDefense - 10;
    let hitPoints = Math.floor(Math.random()*8)+1; 
    let stats = {
        name: name, 
        armorDefense: armorDefense,
        armorBonus: armorBonus,
        hitPoints: hitPoints
    };
    return {type: 'GENERATE_STATS', stats:stats};
}