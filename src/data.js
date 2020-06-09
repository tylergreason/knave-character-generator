export const abilityScoreTitles = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

export const traits = {
    gender:['Male','Female'],
    physique:['Athletic','Brawny','Corpulent','Delicate','Gaunt','Hulking','Lanky','Ripped','Rugged','Scrawny','Short','Stout','Sinewy','Tiny','Slender','Towering','Flabby','Willowy','Statuesque','Wiry'],
    face:['Bloated','Blunt','Bony','Chiseld','Delicate','Elongated','Patrician','Pinched','Hawkish','Broken','Impish','Narrow','Ratlike','Round','Sunken','Sharp','Soft','Square','Wide','Wolfish'],
    skin:['Battle Scar','Oily','Reeking','Birthmark','Pale','Tattooed','Burn Scar','Perfect','Rosy','Dark','Pierced','Rough','Makeup','Pockmarked','Sallow','Sunburned','Tanned','War Paint','Weathered','Whip Scar'],
    hair:['Bald','Braided','Bristly'],
    clothing:['Antique','Bloody','Ceremonial'],
    virtue:['Ambitious','Cautious','Courageous'],
    vice:['Aggressive','Arrogant','Bitter'],
    speech:['Blunt','Booming','Breathy'],
    background:['Alchemist','Beggar','Butcher'],
    misfortune:['Abandoned','Addicted','Blackmailed']
};

/*
item object: 

{
    name
    defense 
    damage
    hands
    slot
    quality
}

this covers all attributes an item can have besides cost, which can always be manually added later (but probably won't be!)
*/

class Item {
    constructor(name, defense = 0, damage = 0, hands = 0, slot = 1, quality = 0){
        this.name = name;
        this.defense  = defense; 
        this.damage = damage; 
        this.hands = hands;
        this.slot = slot;
        this.quality = quality; 
    }
}




const generalGear1 = [
   {
    name: 'Air bladder',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Bear trap',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Shovel',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Bellows',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Grease',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Saw',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Bucket',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Caltrops',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Chisel',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Drill',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Fishing rod',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Marbles',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Glue',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Pick',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Hourglass',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Net',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Tongs',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Lockpicks',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Metal file',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  },
   {
    name: 'Nails',
    defense: 0,
    damage: 0,
    hands: 0,
    slot: 1,
    quality: 0
  }
]
const generalGear2 = [
    {
     name: 'Incense',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Sponge',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Lens',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Perfume',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Horn',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Bottle',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Soap',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Spyglass',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Tar pot',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Twine',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Fake jewels',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Blank book',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Card deck',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Dice set',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Cook pots',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Face paint',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Whistle',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Instrument',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Quill & Ink',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Small bell',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   }
 ]
 
 
 const dungeoneeringGear = [
    {
     name: 'Rope, 50ft',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Crowbar',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Lantern',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Pulleys',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Tinderbox',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Lamp oil',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Candles, 5',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Grap. hook',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Padlock',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Chain, 10ft',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Hammer',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Manacles',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Chalk, 10',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Waterskin',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Mirror',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Pole, 10ft',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Sack',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Tent',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Spikes, 5',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   },
    {
     name: 'Torches, 5',
     defense: 0,
     damage: 0,
     hands: 0,
     slot: 1,
     quality: 0
   }
 ]
 