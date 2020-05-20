import names from './state/names';
const roll = (max) => {
    return Math.ceil(Math.random() * max); 
}

const gender = () => {
    const g = roll(2);
    return (g === 1) ? 'Male' : 'Female'
}
   
// const mainStat = (stat) => {
//    const rawscore = roll(6) + roll(6) + roll(6)
//    m= str(mod(rawscore))
//    print(stat + ': ' +str(rawscore) + ', Mod: '+m)
//    return rawscore
// }

// const getOccupation = () => {
//    oc = random.randint(1,100)
//    return occupations[oc]
// }
const getName = () => {
    const idx = roll(100)
    return names[idx]
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
// const getPhysTrait = () => {
//    index = random.randint(1, 100)
//    return traits.physical[index]
// }
// const getPersTrait = () => {
//    index = random.randint(1, 100)
//    return traits.personality[index]
// }
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
// st = mainStat('STR')
// dex = mainStat('DEX')
// con = mainStat('CON')
// inte = mainStat('INT')
// wis = mainStat('WIS')
// cha = mainStat('CHA')
// luc = mainStat('LUC')

// hp=math.ceil(float(con)/4)
// load=mod(st) + 4
// print('\nHP: '+str(hp))
// print('LOAD: '+str(load))
export {getName};
