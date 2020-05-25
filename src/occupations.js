const occupations = [
    {
        "name":"Alewife",
        "items":[
            "Rolling pin (close, awkward, 1 wt)",
            "cask of ale (2 rations, 2 wt)"
        ]
    },
    {
        "name":"Apiarist",
        "items":[
            "Staff (close, reach, 1 wt)",
            "1d4 clay jars of honey (1 wt ea.)"
        ]
    },
    {
        "name":"Apothecary",
        "items":[
            "Sickle (close, messy, 1 wt)",
            "mortar & pestle (0 wt)"
        ]
    },
    {
        "name":"Baker",
        "items":[
            "Baking paddle (reach, awkward, 1 wt)",
            "sack of flour (2 wt)"
        ]
    },
    {
        "name":"Bard",
        "items":[
            "Knife (hand, 0 wt)",
            "instrument [roll 1d4: 1 = voice; 2 = flute (0 wt); 3 = lute (1 wt); 4 = horn (1 wt)] "
        ]
    },
    {
        "name":"Basketmaker",
        "items":[
            "Knife (hand, 0 wt)",
            "sturdy basket (1 wt)"
        ]
    },
    {
        "name":"Beggar",
        "items":[
            "1 begging bowl (0 wt)",
            "1D4 coins"
        ]
    },
    {
        "name":"Blacksmith",
        "items":[
            "Hammer (close, 1 wt)",
            "burlap sack (0 wt), 1D4 iron ingots (1 wt ea.)"
        ]
    },
    {
        "name":"Boatwright",
        "items":[
            "Handaxe (close, 1 wt)",
            "2D4 planks of wood (1 wt each)"
        ]
    },
    {
        "name":"Bowyer",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1 ammo, 1 wt), 1d4 sets of staves & sinews (1 wt ea.)"
        ]
    },
    {
        "name":"Bricklayer",
        "items":[
            "Trowel (close, awkward, 1 wt)",
            "hod (1 wt), 2d4 bricks (1 wt each)"
        ]
    },
    {
        "name":"Burglar",
        "items":[
            "Prybar (close, awkward, 1 wt)",
            "burlap sack (0 wt)"
        ]
    },
    {
        "name":"Butcher",
        "items":[
            "Cleaver (hand, messy, 1 wt)",
            "side of salted beef (4 rations, 2 wt)"
        ]
    },
    {
        "name":"Carpenter",
        "items":[
            "Handaxe (close, 1 wt)",
            "hand saw (1 wt)"
        ]
    },
    {
        "name":"Cartwright",
        "items":[
            "Handaxe (close, 1 wt)",
            "pushcart "
        ]
    },
    {
        "name":"Catchpole",
        "items":[
            "Club (close, 2 wt)",
            "shoulder bag (0 wt), 2D6 coins "
        ]
    },
    {
        "name":"Chandler",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "2D4 candles (0 wt)"
        ]
    },
    {
        "name":"Chapman",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "rucksack (0 wt), trade item [roll 1d4: 1 = worthless baubles (0 wt); 2 = smoked fish (2 rations, 1 wt);     3 = adventuring gear (2 uses, 1 wt); 4 = jewelry (25 coins, 0 wt)] "
        ]
    },
    {
        "name":"Cheesemaker",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "burlap sack (0 wt), wheel of cheese (4 rations, 2 wt)"
        ]
    },
    {
        "name":"Cobbler",
        "items":[
            "Tack hammer (hand, 0 wt)",
            "1d4 pairs of shoes or boots (1 wt ea.)"
        ]
    },
    {
        "name":"Constable",
        "items":[
            "Shortsword (close, 1 wt)",
            "set of iron cuffs w/key (1 wt)"
        ]
    },
    {
        "name":"Courier",
        "items":[
            "Knife (hand, 0 wt)",
            "leather satchel (0 wt), important letter (0 wt)"
        ]
    },
    {
        "name":"Crier",
        "items":[
            "Knife (hand, 0 wt)",
            "plumed hat (worn, 0 wt)"
        ]
    },
    {
        "name":"Crofter",
        "items":[
            "Pitchfork (close, reach, 1 wt)",
            "bushel of turnips (4 rations, 2 wt)"
        ]
    },
    {
        "name":"Crofter",
        "items":[
            "Pitchfork (close, reach, 1 wt)",
            "bushel of potatoes (4 rations, 2 wt)"
        ]
    },
    {
        "name":"Crofter",
        "items":[
            "Pitchfork (close, reach, 1 wt)",
            "bushel of onions (4 rations, 2 wt)"
        ]
    },
    {
        "name":"Crofter",
        "items":[
            "Pitchfork (close, reach, 1 wt)",
            "bushel of oats (4 rations, 2 wt)"
        ]
    },
    {
        "name":"Ditch digger",
        "items":[
            "Shovel (close, awkward, 2 wt)"
        ]
    },
    {
        "name":"Dung carter",
        "items":[
            "Shovel (close, awkward, 2 wt)",
            "pushcart full of dung "
        ]
    },
    {
        "name":"Dwarf miner",
        "items":[
            "Pick (close, +1 damage, 2 wt)",
            "adventuring gear (1d4 uses, 1 wt)"
        ]
    },
    {
        "name":"Dwarf smith",
        "items":[
            "Hammer (close, 1 wt)",
            "burlap sack (0 wt), 1d4 iron ingots (1 wt ea.)"
        ]
    },
    {
        "name":"Dwarf mason",
        "items":[
            "Hammer (close, 1 wt)",
            "chisel (hand, awkward, 1 wt)"
        ]
    },
    {
        "name":"Dwarf trapper",
        "items":[
            "Knife (hand, 0 wt)",
            "burlap sack (0 wt), 1d4 mole traps (1 wt ea.)"
        ]
    },
    {
        "name":"Elf hunter",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1d4 ammo, 1 wt)"
        ]
    },
    {
        "name":"Elf troubador",
        "items":[
            "Knife (hand, 0 wt)",
            "elven lyre (1 wt)"
        ]
    },
    {
        "name":"Elf wanderer",
        "items":[
            "Staff (close, reach, 1 wt)",
            "hooded cloak (worn, 0 wt)"
        ]
    },
    {
        "name":"Elf weaver",
        "items":[
            "Knife (hand, 0 wt)",
            "bolt of silk (2 wt)"
        ]
    },
    {
        "name":"Executioner",
        "items":[
            "Executioner axe (close, 2-handed, messy, +1 damage, 2 wt) ,black hood (worn, 0 wt)"
        ]
    },
    {
        "name":"Falconer",
        "items":[
            "Knife (hand, 0 wt)",
            "leather gauntlet (0 wt), falcon"
        ]
    },
    {
        "name":"Ferry pilot",
        "items":[
            "Club (close, 2 wt)",
            "10ft pole "
        ]
    },
    {
        "name":"Fisherperson",
        "items":[
            "Knife (hand, 0 wt)",
            "fishing net (reach, thrown)"
        ]
    },
    {
        "name":"Fisherperson",
        "items":[
            "Knife (hand, 0 wt)",
            "fishing net (reach, thrown)"
        ]
    },
    {
        "name":"Fisherperson",
        "items":[
            "Knife (hand, 0 wt)",
            "fishing net (reach, thrown)"
        ]
    },
    {
        "name":"Fletcher",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1d4 ammo, 1 wt)"
        ]
    },
    {
        "name":"Footpad",
        "items":[
            "Sap (hand, stun damage, 0 wt)",
            "burlap sack (0 wt)"
        ]
    },
    {
        "name":"Forager",
        "items":[
            "Sickle (hand, messy, 1 wt)",
            "burlap sack (0 wt), mushrooms     (1d4 rations, 1 wt)"
        ]
    },
    {
        "name":"Forester",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1d4 ammo, 1 wt)"
        ]
    },
    {
        "name":"Goatherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 goats"
        ]
    },
    {
        "name":"Goatherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 goats"
        ]
    },
    {
        "name":"Goatherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 goats"
        ]
    },
    {
        "name":"Gravedigger",
        "items":[
            "Shovel (close, awkward, 2 wt)"
        ]
    },
    {
        "name":"Halfling brewer",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "cask of beer (2 rations, 2 wt)"
        ]
    },
    {
        "name":"Halfling cook",
        "items":[
            "Cleaver (hand, +1 damage, 1 wt)",
            "meat pies (1d4 rations, 1 wt)"
        ]
    },
    {
        "name":"Halfling crofter",
        "items":[
            "Pitchfork (close, reach, 1 wt)",
            "bushel of crop [2 wt, roll 1D4: 1 = turnips (4 rations); 2 = potatoes (4 rations); 3 =onions (4 rations), 4 =pipeweed]"
        ]
    },
    {
        "name":"Halfling gardener",
        "items":[
            "Spade (hand, awkward, 0 wt)",
            "wheelbarrow"
        ]
    },
    {
        "name":"Healer",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "shoulder bag (0 wt), bandages (1d4 uses, slow, 0 wt)"
        ]
    },
    {
        "name":"Hedge wizard",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "belt pouch (0 wt), 1 cantrip [roll 1D6: 1-2 = Light; 3-4 = Unseen Servant; 5-6 = Prestidigitation]"
        ]
    },
    {
        "name":"Herald",
        "items":[
            "Shortsword (close, 1 wt)",
            "trumpet (1 wt)"
        ]
    },
    {
        "name":"Herbalist",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "pouch (0 wt), poultices & herbs (1d4 uses, slow, 0 wt)"
        ]
    },
    {
        "name":"Hunter",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1d4 ammo, 1 wt)"
        ]
    },
    {
        "name":"Hunter",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1d4 ammo, 1 wt)"
        ]
    },
    {
        "name":"Hunter",
        "items":[
            "Shortbow (near, far, 1 wt)",
            "arrows (1d4 ammo, 1 wt)"
        ]
    },
    {
        "name":"Innkeeper",
        "items":[
            "Club (close, 2 wt)",
            "provisions (2d4 rations, 2 wt)"
        ]
    },
    {
        "name":"Lantern",
        "items":[
            "maker Hammer (close, 1 wt)",
            "lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt)"
        ]
    },
    {
        "name":"Laundress",
        "items":[
            "Canvas sack (0 wt)",
            "cake of soap (0 wt)"
        ]
    },
    {
        "name":"Miller",
        "items":[
            "Club (close, 2 wt)",
            "sack of flour (2 wt)"
        ]
    },
    {
        "name":"Miner",
        "items":[
            "Pick (close, +1 damage, 2 wt)",
            "lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt)"
        ]
    },
    {
        "name":"Monk",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "holy symbol (0 wt)"
        ]
    },
    {
        "name":"Netmaker",
        "items":[
            "Knife (hand, 0 wt)",
            "fishing net (reach, thrown), 50ft of rope (2 wt)"
        ]
    },
    {
        "name":"Noble",
        "items":[
            "Longsword (close, +1 damage, 1 wt)",
            "signet ring (10 coins, 0 wt)"
        ]
    },
    {
        "name":"Oxherd",
        "items":[
            "Whip (reach, 1 wt)",
            "ox"
        ]
    },
    {
        "name":"Peddler",
        "items":[
            "Knife (hand, 0 wt)",
            "rucksack (worn, 0 wt), trade item [roll 1D4: 1 = pots & pans (2 wt); 2 = 2d4 knives (hand, 0 wt), 3 = adventuring gear (1d4 uses, 2 wt), 4 = 1d4 healing potions (heal 1d8, 0 wt)]"
        ]
    },
    {
        "name":"Pilgrim",
        "items":[
            "Staff (close, 2-handed, 1 wt)",
            "holy symbol (0 wt)"
        ]
    },
    {
        "name":"Potter",
        "items":[
            "Club (close, 2 wt)",
            "burlap sack (0 wt), 5 lbs. of clay (2 wt)"
        ]
    },
    {
        "name":"Prostitute",
        "items":[
            "Knife (hand, 0 wt)",
            "flask of perfume (0 wt)"
        ]
    },
    {
        "name":"Rat catcher",
        "items":[
            "Club (close, 2 wt)",
            "burlap sack (0 wt), 2d4 dead rats (1 wt)"
        ]
    },
    {
        "name":"Ropemaker",
        "items":[
            "Club (close, 2 wt)",
            "100ft of rope (2 wt)"
        ]
    },
    {
        "name":"Scout",
        "items":[
            "Knife (hand, 0 wt)",
            "cloak (worn, 0 wt)"
        ]
    },
    {
        "name":"Scribe",
        "items":[
            "2d4 pieces of parchment (0 wt)",
            "quill & bottle of ink (0 wt)"
        ]
    },
    {
        "name":"Shepherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 sheep"
        ]
    },
    {
        "name":"Shepherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 sheep"
        ]
    },
    {
        "name":"Shepherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 sheep"
        ]
    },
    {
        "name":"Soothsayer",
        "items":[
            "Nothing"
        ]
    },
    {
        "name":"Swineherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 swine"
        ]
    },
    {
        "name":"Swineherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 swine"
        ]
    },
    {
        "name":"Swineherd",
        "items":[
            "Crook (reach, awkward, 1 wt)",
            "1d4 swine"
        ]
    },
    {
        "name":"Tanner",
        "items":[
            "Knife (hand, 0 wt)",
            "2d4 animal hides (2 wt)"
        ]
    },
    {
        "name":"Thatcher",
        "items":[
            "Handaxe (close, 1 wt)",
            "1d4 sheaves of straw (1 wt ea.)"
        ]
    },
    {
        "name":"Tinker",
        "items":[
            "Tinkers tools (0 wt)"
        ]
    },
    {
        "name":"Trapper",
        "items":[
            "Knife (hand, 0 wt)",
            "traps [roll 1D4: 1 = 2d4 rat traps (0 wt); 2 = 1d4 rabbit traps (2 wt); 3 = 1 snare trap (1 wt); 4 = 1 bear trap (2 wt)"
        ]
    },
    {
        "name":"Trapper",
        "items":[
            "Knife (hand, 0 wt)",
            "traps [roll 1D4: 1 = 2d4 rat traps (0 wt); 2 = 1d4 rabbit traps (2 wt); 3 = 1 snare trap (1 wt); 4 = 1 bear trap (2 wt)"
        ]
    },
    {
        "name":"Trapper",
        "items":[
            "Knife (hand, 0 wt)",
            "traps [roll 1D4: 1 = 2d4 rat traps (0 wt); 2 = 1d4 rabbit traps (2 wt); 3 = 1 snare trap (1 wt); 4 = 1 bear trap (2 wt)"
        ]
    },
    {
        "name":"Undertaker",
        "items":[
            "Holy symbol (0 wt)",
            "coffin (4 wt)"
        ]
    },
    {
        "name":"Watchman",
        "items":[
            "Spear (reach, thrown, near, 1 wt)",
            "helmet (worn, 0 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt), horn (0 wt)"
        ]
    },
    {
        "name":"Watchman",
        "items":[
            "Spear (reach, thrown, near, 1 wt)",
            "helmet (worn, 0 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt), horn (0 wt)"
        ]
    },
    {
        "name":"Watchman",
        "items":[
            "Spear (reach, thrown, near, 1 wt)",
            "helmet (worn, 0 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt), horn (0 wt)"
        ]
    },
    {
        "name":"Weaver",
        "items":[
            "1d4 bolts of fabric (1 wt ea.)"
        ]
    },
    {
        "name":"Woodsman",
        "items":[
            "Handaxe (close, 1 wt)",
            "2d4 sticks of firewood (1 wt ea.)"
        ]
    },
    {
        "name":"Woodsman",
        "items":[
            "Handaxe (close, 1 wt)",
            "2d4 sticks of firewood (1 wt ea.)"
        ]
    },
    {
        "name":"Woodsman",
        "items":[
            "Handaxe (close, 1 wt)",
            "2d4 sticks of firewood (1 wt ea.)"
        ]
    }
]
export default occupations;