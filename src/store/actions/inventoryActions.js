import { generalGear1, generalGear2, dungeoneeringGear, armors, weapons, startingItems } from '../../data'

export const generateInventory = () => {
    // let item list start with default starting items 
    let items = [...startingItems]; 
    // pick a random item from each list once, or twice for dungeoneering gear
    items.push(generalGear1[Math.floor(Math.random()*generalGear1.length)])
    items.push(generalGear2[Math.floor(Math.random()*generalGear2.length)])
    items.push(dungeoneeringGear[Math.floor(Math.random()*dungeoneeringGear.length)])
    items.push(armors[Math.floor(Math.random()*armors.length)])
    console.log(items); 
    return {type:'GENERATE_INVENTORY', inventory: items}
}

export const addInventoryItem = (item) => {
    return {type:'ADD_INVENTORY_ITEM', item: item}
}