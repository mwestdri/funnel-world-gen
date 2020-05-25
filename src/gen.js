import {maleNames, femaleNames} from './state/names';
import occupations from './occupations';
import {physicalTraits, personalityTraits} from './traits';


const roll = (max) => {
    return Math.ceil(Math.random() * max); 
}

const getGender = () => {
    const g = roll(2);
    return (g === 1) ? 'Male' : 'Female'
}

const rollStat = () => {
    return roll(6) + roll(6) + roll(6)
}
const convertToModifier = (score) => {
    switch(true) {
        case (score == 3):
            return -3;
        case (score <= 5):
            return -2;
        case (score <= 8):
            return -1;
        case (score <= 12):
            return 0;
        case (score <= 15):
            return 1;
        case (score <= 17):
            return 2;
        case (score == 18):
            return 3;
        default:
            return -20;
    }
}

const getIndividualStat = (stat) => {
    const score = rollStat();
    return convertToModifier(score);
}

const getOccupation = () => {
    const idx = roll(100);
    return occupations[idx];
}
const getName = (gender) => {
    const idx = roll(100)
    return gender === 'Male' ? maleNames[idx] : femaleNames[idx];
}
// const getName = (occ, gender) => {

//    race = 'Human'
//    if 'Dwarf' in occ:
//       race = 'Dwarf'
//    elif 'Elf' in occ:
//       race = 'Elf'
//    elif 'Halfling' in occ:
//       race = 'Halfling'
//    if 'Human' in race:
//       index = random.randint(1,100)
//       if 'Male' in gender:
//          return names.maleNames[index]
//       else:
//          return names.femaleNames[index]
//    if 'Dwarf' in race:
//       index = random.randint(1,10)
//       if 'Male' in gender:
// 	  	 return names.maleDwarfNames[index]
//       else:
// 	  	 return names.femaleDwarfNames[index]
//    if 'Elf' in race:
//       index = random.randint(1,10)
//       if 'Male' in gender:
// 	  	 return names.maleElfNames[index]
//       else:
// 	  	 return names.femaleElfNames[index]
//    if 'Halfling' in race:
//       index = random.randint(1,10)
//       if 'Male' in gender:
// 	  	 return names.maleHalflingNames[index]
//       else:
// 	  	 return names.femaleHalflingNames[index]
// }
const getPhysTrait = () => {
   const index = roll(100);
   return physicalTraits[index]
}
const getPersTrait = () => {
   const index = roll(100)
   return personalityTraits[index]
}
const getTraits = () => {
    return {
        physical: getPhysTrait(),
        personality: getPersTrait()
    }
}
// stats = ['str','dex','con', 'int', 'wis','cha','luc']


// print('\n\n################### A Villager #################\n')
// occ = getOccupation()
// gender = gender()
// name = getName(occ, gender)
// print('Name: '+getName(occ, gender))

// print('Occupation: '+occ)
// print ('Gender: '+gender+'\n')

// print('Traits:')
// print('Physical trait: '+str(getPhysTrait()))
// print('Personality trait: '+str(getPersTrait()))

// print('\n\n############## Ability Scores and Modifiers ##############\n')
const getStats = () => {
    const constitutionRawScore = rollStat();
    const hp = Math.ceil(constitutionRawScore/4);
    const constitution = convertToModifier(constitutionRawScore);

    const strength = getIndividualStat();
    const load = strength + 4;
    const stats = [
        {
            name: 'Strength',
            shortName: 'STR',
            value: strength
        },
        {
            name: 'Dexterity',
            shortName: 'DEX',
            value: getIndividualStat()
        },
        {
            name: 'Constitution',
            shortName: 'CON',
            value: constitution
        },
        {
            name: 'Intelligence',
            shortName: 'INT',
            value: getIndividualStat()
        },
        {
            name: 'Wisdom',
            shortName: 'WIS',
            value: getIndividualStat()
        },
        {
            name: 'Charisma',
            shortName: 'CHA',
            value: getIndividualStat()
        },
        {
            name: 'Hit Points',
            shortName: 'HP',
            value: hp
        },
        {
            name: 'Load',
            shortName: 'LOAD',
            value: load
        }
    ];
    return stats;
}

// hp=math.ceil(float(con)/4)
// load=mod(st) + 4
// print('\nHP: '+str(hp))
// print('LOAD: '+str(load))
export {getName, getGender, getOccupation, getStats, getTraits};
