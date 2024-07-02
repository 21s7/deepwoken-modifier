let currentSelection = ""; // в пустой залупке хранится выбранный элемент

function handleItemClick(itemName) {
  currentSelection = itemName;
  let infoText = ""; // тут текст хранится

  // Flamecharm



const mantra = [
  // Flamecharm
  "Fire Blade",
  "Flame Repulsion",
  "Burning Servants",
  "Flame Grab",
  'Fire gun',
  "Flame Blind",
  "Fire Palm",
  "Fire Eruption",
  "Fire Forge",
  "Relentless Flames",
  "Flame Sentinel",
  "Rising Flame",
  "Ash Slam",
  "Flame Ballista",
  "Flaming Scourge",
  "Flame Leap",
  "Flame Assault",
  "Flame Wisp",
  "Graceful Flame",
  "Flame of Denial",

  // Thundercall
  "Lightning Blade",
  "Jolt Grab",
  "Lightning Beam",
  "Electro Carve",
  "Fleeting sparks",
  "Lightning Impact",
  "Lightning Clones",
  "Lightning Strike",
  "Thunder Kick",
  "Storm Blades",
  "Grand Javelin",
  "Bolt Piercer",
  "Emotion Wave",
  "Lightning Stream",
  "Thunder Wisp",
  "sparks Swap",
  "Lightning Assault",
  "Lightning Cloak",

  // Frostdraw
  "Ice Spikes",
  "Ice Beam",
  "Warden's Blades",
  "Frozen Servants",
  "Ice Daggers",
  "Ice Blade",
  'Ice Chain',
  "Ice Eruption",
  "Ice Forge",
  "Ice Smash",
  "Ice Lance",
  "Rising Frost",
  "Ice Flock",
  "Ice Carve",
  "Frost Grab",
  "Ice Cubes",
  "Ice Fissure",
  "Glacial Arc",  
  "Ice Skate",
  "Frost Wisp",
  "Iceberg",

  // Galebreath
  "Wind Blade",
  "Tornado Kick",
  "Air Force",
  "Gale Lunge",
  "Tornado",
  "Heavenly Wind",
  "Galetrap",
  "Gale Punch",
  "Wind Forge",
  "Twister Kicks",
  "Champion's Whirlthrow",
  "Rising Wind",
  "Wind Gun",
  "Wind Carve",
  "Astral Wind",
  "Pillars of Erisia",
  "Wind Passage",
  "Gale Wisp",

  // Shadowcast
  "Dark Blade",
  "Shadow Gun",
  "Clutching Shadow",
  "Shadow Eruption",  "Rising Shadow",
  "Shadow Seekers",
  "Shadow Meteor",
  "Shadow Burst",
  "Shadow Chains",
  "Shadowforge",
  "Shadow Assault",
  "Shadow Roar",
  "Shade Wisp",
  "Encircle",
  "Devouring Eye",
  "Shade Bringer",
  "Shadow Vortex",
  "Shade Devour",
  "Eclipse Kick",

  // Ironsing
  "Metal Eruption",
  "Needle Barrage",
  "Metal Rampart",
  "Metal Kick",
  "Iron Skin",
  "Chain Pull",
  "Metal Rain",
  "Caltrops",
  "Firing Line",
  "Metal Fakeout",
  "Oxidizing Rush",
  "Metal Ball",
  "Metal Wisp",
  "Metal Armament",
  "Metal Gatling",
  "Iron Slam",
  "Iron Hug",
  "Rocket Lance",
  //hybrid
  "Flashfire Sweep",
  "Iron Tether",
  "Permafrost Prison★",
  "Tempest Blitz★",
  //moster mantras
  'Brachial Spear',
  'Coral Spear',
  'Dread Breath',
  'Beast Burrow',
  'Enforcer Pull',
  'Mecha Gatling',
  'Whirling Blade',
  'Abyssal Ridge',
  //outhbound
  'Arc Suit',
'Arc Beam',
'Arc Wave',
'Mindsoothe',
'Tranquil Circle',
'Sightless Beam',
'Equalizer',
'Lord/s Slice',
'Judgement',
'Radiant Kick',
'Blinding Dawn',
'Radiant Dawn',
'Precision Cuts',
'Close Shave',
'Fake Strike',
'Jet Kick',
'Symbiotic Sustain',
'Symbiotic Link',
'Parasitic Leech',
'Ascension',
'Sinister Halo',
'Celestial Assault',
'Illusory Counter',
'Illusory Realm',
'Illusory Servants',
//БЕЗ МАГИИ
'STRONG LEFT',
'Rapid Punches',
'Skyshatter Kick',
'Karita Leap',
'Karita Divebomb',
'Tacet Drop Kick',
'Rally',
'Reinforce',
'Brace',
'Shoulder Bash',
'Dash',
'Revenge',
'Adrenaline Surge',
'Summon Cauldron',
'Prediction',
'Gaze',
'Glare',
'Exhaustion Strike',
'Taunt',
'Sing',
'Disguise',
'Rapid Slashes',
'Ceaseless Slashes',
'Master/s Flourish',
'Twincleave',
'Prominence Draw',
'Flashdraw Strike',
'Pressure Blast',
'Punishment',
'Onslaught'
];
mantra.forEach(function(mantra) {
  if (itemName === mantra) {
    infoText = `Это мантра ${mantra}`;
  }
});

  document.getElementById(
    "infoText"
  ).innerHTML = `<p>${infoText}. Выберите направление.</p>`;
}

function caseAction(type) {
if (currentSelection === "") {
    document.getElementById('infoText').innerHTML = "<p>Сначала выберите элемент.</p>";
    return;
}

let infoText = '';

// флеймчарм инфо

    if (currentSelection === 'Fire Blade') {
        if (type === 'mod') {
            infoText = `
            <h1>Fire Blade modification</h1>
            <p>cloud stone/stratus stone❌</p>
            <p>drift shard/rush shard❌</p>
            <p>aeon logstone/eternal logstone✅</p>
            <p>crystal lens/perfect lens❌</p>
            <p>glass stone/magnifying stone❌</p>
            <p>vibrant gem✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark✅</p>
          <p>Reversal Spark info (Only Works On Starkindred): Reverts the 'fire wave' effect on the Fire Blade IF you have the Starkindred Oath AND you have your wings out</p>
          <p>Blast Spark❌</p>
        `;
        } else if (type === 'leveling') {
            infoText = `
            <h1>Fire Blade leveling</h1>
            <p>на 5 уровне прокачки тру блок брейк</p>
        `;
        } else if (type === 'effect') {
            infoText = `
            <h1>Fire Blade modeffect</h1>
            <p>aeon and eternal logstones ???</p>
            <p>vibrant gems: увелчивают интенсивность пламени</p>
        
        `;
        }
    } else if (currentSelection === 'Burning Servants') {
        if (type === 'mod') {
            infoText = `
                <h1>Burning Servants Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ✅</p>
                <p>Round spark❌</p>
  
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark✅</p>
            <p>Reversal Spark: Makes the servants aim outwards instead of inwards, also ragdolls</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Burning Servants Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Burning Servants Effect</h1>
                <p>Cloud Stones/Stratus Stones: делает размер больше</p>
                <p>Drift Shard/Rush Shard: делает мантру быстрее</p>
            `;
        }
    } else if (currentSelection === 'Flame Grab') {
        if (type === 'mod') {
            infoText = `
                <h1>Flame Grab Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
  
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Flame Grab Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Flame Grab Effect</h1>
                <p>Crystal and Perfect Lens: делает мантру длиннее</p>
            `;
        }
    } else if (currentSelection === 'Flame Repulsion') {
        if (type === 'mod') {
            infoText = `
                <h1>Flame Repulsion Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark✅</p>
            <p>Blast Spark info: ?</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Flame Repulsion Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Flame Repulsion Effect</h1>
                <p>Cloud and Stratus Stones: делает размер больше</p>
            `;
        }
    } else if (currentSelection === 'Fire Gun') {
        if (type === 'mod') {
            infoText = `
                <h1>Fire Gun Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark✅</p>
           <p>Round Spark info: Makes the bullets, when shot, split into two (basically you shoot 2 bullets from each finger instead of 1, they also shoot in random directions)</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark✅</p>
            <p>Blast Spark info:Blast Spark: Makes every 6 bullet hits proc an explosion, but deal less damage on the fire gun hits.</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Fire Gun Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Fire Gun Effect</h1>
                <p>Drift and Rush Shards: делает пули дальше и быстрее</p>
            `;
        }
    } else if (currentSelection === 'Flame of Denial') {
        if (type === 'mod') {
            infoText = `
                <h1>Flame of Denial Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ✅</p>
                <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Flame of Denial Leveling</h1>
                <p> увеличивает восстоновление здровья за уровень</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Flame of Denial Effect</h1>
                <p>Vibrant Gem: делает разрушение окружения больше</p>
            `;
        }
    }  else if (currentSelection === 'Flame Blind') {
        if (type === 'mod') {
            infoText = `
                <h1>Flame Blind Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Flame Blind Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Flame Blind Effect</h1>
                <p>Crystal and Perfect Lens: увеличивает радиус эффекта</p>
            `;
        }
    } else if (currentSelection === 'Fire Palm') {
        if (type === 'mod') {
            infoText = `
                <h1>Fire Palm Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Fire Palm Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Fire Palm Effect</h1>
                <p>Cloud and Stratus Stones: делает огненную волну больше</p>
            `;
        }
    } else if (currentSelection === 'Fire Eruption') {
        if (type === 'mod') {
            infoText = `
                <h1>Fire Eruption Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ✅</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Fire Eruption Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Fire Eruption Effect</h1>
                <p>Glass and Magnifying Stones: делает эрупцию больше</p>
            `;
        }
    } else if (currentSelection === 'Fire Forge') {
        if (type === 'mod') {
            infoText = `
                <h1>Fire Forge Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark✅</p>
           <p> Tornado Spark: Do a flaming twirl before shooting fire knives in a straight line</p>

            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Fire Forge Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Fire Forge Effect</h1>
                <p>Aeon and Eternal Logstones: делает кинжалы быстрее</p>
                <p>Crystal and Perfect Lens: делает кинжалы быстрее</p>
            `;
        }
    } else if (currentSelection === 'Graceful Flame') {
        if (type === 'mod') {
            infoText = `
                <h1>Graceful Flame Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>
                 <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
      

            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Graceful Flame Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') {
            infoText = `
                <h1>Graceful Flame Effect</h1>
                <p>Cloud and Stratus Stones: делает огонь больше</p>
                <p>Aeon and Eternal Logstones: делает больше ритуальных ключей для ритуального каста</p>
            `;
        }
} else if (currentSelection === 'Flame Sentinel') {
    if (type === 'mod') {
        infoText = `
            <h1>Flame Sentinel Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark✅</p>
           <p>Magnet Spark: The orb now follows you </p>

            <p>Tornado Spark❌</p>
          

            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flame Sentinel Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Flame Sentinel Effect</h1>
            <p>Crystal and Perfect Lens: делает кинжалы быстрее</p>
            <p>Glass and Magnifying Stones: делает кинжалы быстрее</p>
        `;
    }
} else if (currentSelection === 'Flame Wisp') {
    if (type === 'mod') {
        infoText = `
            <h1>Flame Wisp Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flame Wisp Leveling</h1>
            <p>У увеличивает восстоновление здровья за уровень</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Flame Wisp Effect</h1>
            <p>Aeon and Eternal Logstones: делает длительность дольше</p>
            <p>Glass and Magnifying Stones: делает огонь больше</p>
            <p>Vibrant Gems: делает огонь больше</p>
        `;
    }
} else if (currentSelection === 'Flame Leap') {
    if (type === 'mod') {
        infoText = `
            <h1>Flame Leap Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark✅</p>
           <p> Reversal Spark: Removes most of the vertical movement of flame leap, instead, you will now do a flip forwards before slamming back down, the slam will send anyone hit into the sky </p>

            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flame Leap Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Flame Leap Effect</h1>
            <p>Glass and Magnifying Stones: делает взлет больше</p>
        `;
    }
} else if (currentSelection === 'Flare Volley') {
    if (type === 'mod') {
        infoText = `
            <h1>Flare Volley Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
             <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
       
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flare Volley Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Flare Volley Effect</h1>
            <p>Cloud and Stratus Stones: делает волей больше</p>
            <p>Drift and Rush Shards: делает волей быстрее</p>
        `;
    }
} else if (currentSelection === 'Flame Assault') {
    if (type === 'mod') {
        infoText = `
            <h1>Flame Assault Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flame Assault Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Flame Assault Effect</h1>
            <p>Crystal and Perfect Lens: делает ассалт быстрее</p>
            <p>Glass and Magnifying Stones: делает ассалт быстрее</p>
        `;
    }
} else if (currentSelection === 'Rising Flame') {
    if (type === 'mod') {
        infoText = `
            <h1>Rising Flame Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Rising Flame Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Rising Flame Effect</h1>
            <p>Cloud and Stratus Stones: делает эффект длиннее</p>
        `;
    }
} else if (currentSelection === 'Relentless Flames') {
    if (type === 'mod') {
        infoText = `
            <h1>Relentless Flames★★ Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
             <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Relentless Flames★★ Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') {
        infoText = `
            <h1>Relentless Flames★★ Effect</h1>
            <p>vibrant gems: ???</p>
         
        `;
    }
} else if (currentSelection === 'Ash Slam') {
    if (type === 'mod') {
        infoText = `
            <h1>Ash Slam Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Ash Slam Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') { 
        infoText = `
            <h1>Ash Slam Effect</h1>
            <p>crystal leens/perfect leens: делает хитбокс больше</p>
            <p>vibrant gems: ???</p>
        `;
    }
}

else if (currentSelection === 'Flame Ballista') {
    if (type === 'mod') {
        infoText = `
            <h1>Flame Ballista Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>  
            <p>Vibrant Gem ✅</p>
             <p>Round spark❌</p>
          
            <p>Spring Spark✅</p>
          <p>Spring Spark: Fly in the air while charging the ballista.</p>

            <p>Magnet Spark❌</p>
          

            <p>Tornado Spark❌</p>
          

            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flame BallistaLeveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') { 
        infoText = `
            <h1>Flame Ballista Effect</h1>
            <p>crystal leens/perfect leens: увеличивает дальность/скорость</p>
            <p>Glass and Magnifying Stones:  увеличивают «извержение»</p>
        `;
    }
}

else if (currentSelection === 'Flaming Scourge') {
    if (type === 'mod') {
        infoText = `
            <h1>Flaming Scourge Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
             <p>Round spark❌</p>
          
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>
        `;
    } else if (type === 'leveling') {
        infoText = `
            <h1>Flaming Scourge Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
        `;
    } else if (type === 'effect') { 
        infoText = `
            <h1>Flaming Scourge Effect</h1>
            <p>vibrant gems: ???</p>
        `;
    }
}
//тандер инфо
else if (currentSelection === 'Lightning Blade') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Blade Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark✅</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`

        ;
    } else if (type === 'leveling') {
        infoText = 
           ` <h1>Lightning Blade Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Blade Effect</h1>
            <p>Cloud and Stratus Stones: Increases the hitbox of the blades</p>
            <p>Aeon and Eternal Logstones: Increases the length of the applied 'shock' effect</p>
            <p>Magnet Spark: Makes you do a third slash after the initial two slashes</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}

else if (currentSelection === 'Jolt Grab') {
    if (type === 'mod') {
        infoText = 
            `<h1>Jolt Grab Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark✅</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Jolt Grab Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Jolt Grab Effect</h1>
            <p>Magnet Spark: Makes you teleport to the opponent, removes the horizontal movement, and the teleport does AOE damage</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}


else if (currentSelection === 'Lightning Beam') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Beam Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
          ` <h1>Lightning Beam Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
           ` <h1>Lightning Beam Effect</h1>
            <p>Crystal and Perfect Lens: Increases the range and speed of the beam</p>
            <p>Glass and Magnifying Stones: Increases the range</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}

else if (currentSelection === 'Lightning Strike') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Strike Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Lightning Strike Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Strike Effect</h1>
            <p>Drift and Rush Shards: Appears to have no effect</p>
            <p>Aeon and Eternal Logstones: Increases the number of strikes but lowers the damage (reaches a point where the damage is basically nothing)</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}


else if (currentSelection === 'Lightning Stream') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Stream Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Lightning Stream Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Stream Effect</h1>
            <p>Cloud and Perfect Lens: Increases the range of the strikes</p>
            <p>Glass and Magnifying Stones: Increases the range</p>
            <p>Blast Spark: Removes the pulling effect of Lightning Stream and replaces it so the Lightning Stream now does a bit of damage, along with applying shock onto the opponent</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}

else if (currentSelection === 'Lightning Impact') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Impact Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark✅</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Lightning Impact Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Impact Effect</h1>
            <p>Aeon and Eternal Logstones: Increases the number of strikes but lowers the damage (reaches a point where the damage is basically nothing)</p>
            <p>Reversal Spark: Teleport behind your target when striking down, however it increases wind-up. Moves you forward slightly upon missing the mantra.</p>
            <p>Glass and Magnifying Stones: Increases the range and speed of the beam</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}

else if (currentSelection === 'Lightning Clones') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Clones Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark✅</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
           ` <h1>Lightning Clones Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Clones Effect</h1>
            <p>Cloud and Perfect Lens: Increases the number of clones</p>
            <p>Multiplying Spark: Causes two clones to spawn instead of one</p>
            <p>Blast Spark: Makes the clones create a small AOE explosion when they disappear/die</p>
            <p>Glass and Magnifying Stones: Increases the duration of the clones</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}

else if (currentSelection === 'Electro Carve') {
    if (type === 'mod') {
        infoText = 
            `<h1>Electro Carve Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark✅</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Electro Carve Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Electro Carve Effect</h1>
            <p>Cloud and Stratus Stones: Increases the range of the carve</p>
            <p>Crystal and Perfect Lens: Increases the range and speed of the carve</p>
            <p>Glass and Magnifying Stones: Increases the range</p>
            <p>Magnet Spark: Throws a javelin that, after a certain amount of time, makes a field that shocks everyone around the victim.*</p>
            <p>Blast Spark: Makes you slam the ground which creates a shocking field.*</p>
            <p>*Note, neither work with eachother (it just applies the first one you put on)</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}

else if (currentSelection === 'Thunder Kick') {
    if (type === 'mod') {
        infoText = 
            `<h1>Thunder Kick Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Thunder Kick Leveling</h1>
            <p>Increases posture dmg by (PLACEHOLDER) per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Thunder Kick Effect</h1>
            <p>Cloud and Perfect Lens: Moves you in the direction of the kick</p>
            <p>Aeon and Eternal Logstones: Makes the kick stronger</p>`
        ;
    }
}

else if (currentSelection === 'Bolt Piercer') {
    if (type === 'mod') {
        infoText = 
            `<h1>Bolt Piercer Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Bolt Piercer Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Bolt Piercer Effect</h1>
            <p>Multiplying sparks: Allows you to shoot bolts instead of arrows</p>
            <p>Aeon and Eternal Logstones: Turns the bolt into a high-speed projectile</p>
            <p>Glass and Magnifying Stones: Increases the range of the bolts</p>`
        ;
    }
}

else if (currentSelection === 'Grand Javelin') {
    if (type === 'mod') {
        infoText = 
            `<h1>Grand Javelin Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
            <p>Spring Spark❌</p>
            <p>Magnet Spark❌</p>
            <p>Tornado Spark❌</p>
            <p>Multiplying Spark❌</p>
            <p>Reversal Spark❌</p>
            <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Grand Javelin Leveling</h1>
            <p>Increases damage by (PLACEHOLDER) per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Grand Javelin Effect</h1>
            <p>Cloud and Stratus Stones: Increases the range of the javelin</p>
            <p>Multiplying Spark: Turns the javelin into a triple shot javelin that shoots in a triangle formation in front of you</p>
            <p>Vibrant Gem: Increases the speed and damage of the javelin</p>`
        ;
    }
}



else if (currentSelection === 'Thunder Wisp') {
    if (type === 'mod') {
        infoText = 
            `<h1>Thunder Wisp Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Thunder Wisp Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Thunder Wisp Effect</h1>
            <p>Aeon and Eternal Logstones: Increases the range of the wisp</p>
            <p>Crystal and Perfect Lens: Increases the range of the wisp</p>
            <p>Vibrant Gem: Increases the damage of the wisp</p>`
        ;
    }
}

else if (currentSelection === 'Storm Blades') {
    if (type === 'mod') {
        infoText = 
            `<h1>Storm Blades Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark✅</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Storm Blades Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Storm Blades Effect</h1>
            <p>Aeon and Eternal Logstones: Increases the number of blades</p>
            <p>Tornado Spark: Changes the mantra to the 'Storm Cage', it creates a somewhat large circle around the user and prevents anyone else from leaving the circle, shocking them and pulling back in if they do. This disables other modifications, however.</p>
            <p>Glass and Magnifying Stones: Increases the range of the blades</p>
            <p>Vibrant Gem: Increases the damage of the blades</p>`
        ;
    }
}
else if (currentSelection === 'Fleeting sparkss') {
    if (type === 'mod') {
        infoText = 
            `<h1>Fleeting sparks Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark✅✅</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Fleeting sparks Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Fleeting sparks Effect</h1>
            <p>Cloud and Stratus Stones: Increases the range and speed of the attack</p>
            <p>Magnet Spark info Doubles the orb amount, orb damage is split between all</p>
            <p>Multiplying Spark info Removes laser function, the orbs now ignore all obstacles defending the target</p>
            <p>Multiplying + Magnet Spark: Both effects are present, orbs ignore all obstacles defending the target</p>
            <p>Crystal and Perfect Lens: Increases the range of the strikes</p>
            <p>Glass and Magnifying Stones: Increases the range</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}
else if (currentSelection === 'Lightning Assault') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Assault Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌ </p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Lightning Assault Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Assault Effect</h1>
            <p>Cloud and Stratus Stones: Increases the amount of teleports</p>
            <p>Vibrant Gem: ?</p>`
        ;
    }
}
else if (currentSelection === 'Lightning Cloak') {
    if (type === 'mod') {
        infoText = 
            `<h1>Lightning Cloak Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌ </p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Lightning Cloak Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Lightning Cloak Effect</h1>
            <p>Aeon and Eternal Logstones: Does absolutely nothing :thumbsup:</p>`
        ;
    }
}
else if (currentSelection === 'sparks Swap') {
    if (type === 'mod') {
        infoText = 
            `<h1>sparks Swap Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌ </p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>sparks Swap Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>sparks Swap Effect</h1>
            <p>Cloud and Stratus Stones: Possibly increases range, needs testing</p>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Multiplying sparks: Significantly reduces cooldown and range, also gives an audio cue for when you swap. BOOGIE WOOGIE!</p>`
        ;
    }
}
else if (currentSelection === 'Emotion Wave') {
    if (type === 'mod') {
        infoText = 
            `<h1>Emotion Wave Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌ </p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Emotion Wave Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Emotion Wave Effect</h1>
            <p>Cloud and Stratus Stones: Increases size, amount of lightning strikes, and makes them spawn one after another</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Vibrant Gems: ?</p>`
        ;
    }
}   
//lighting assalt
//lighting cloak
//sparks swap
// wave




//фростдрав инфо

else if (currentSelection === 'Frost Grab★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Frost Grab Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark✅</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Frost Grab Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Frost Grab Effect</h1>
            <p>Aeon and Eternal Logstones: Increases the duration of the grab</p>
            <p>Blast Spark info Makes a trail of ice appear when you move with this mantra</p>
            <p>Glass and Magnifying Stones: Increases the range of the grab</p>
            <p>Vibrant Gem: Increases the damage of the grab</p>`
        ;
    }
}

else if (currentSelection === 'Ice Fissure★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Fissure Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round spark✅</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Fissure Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Fissure Effect</h1>
            <p>Drift and Rush Shards: Increases the range of the fissure</p>
            <p>Round spark:?</p>
            <p>Crystal and Perfect Lens: Increases the width of the fissure</p>
            <p>Glass and Magnifying Stones: Increases the range of the fissure</p>`
        ;
    }
}

else if (currentSelection === 'Ice Chain★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Chains Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Chains Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Chains Effect</h1>
            <p>Aeon and Eternal Logstones: Increases the duration of the chains</p>
            <p>Crystal and Perfect Lens: Increases the range of the chains</p>
            <p>Glass and Magnifying Stones: Increases the duration of the chains</p>
            <p>Vibrant Gem: Increases the damage of the chains</p>`
        ;
    }
}

else if (currentSelection === 'Ice Lance★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Lance Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Lance Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Lance Effect</h1>
            <p>Crystal and Perfect Lens: Increases the range of the lance</p>
            <p>Glass and Magnifying Stones: Increases the range of the lance</p>
            <p>Vibrant Gem: Increases the damage of the lance</p>`
        ;
    }
}


else if (currentSelection === 'Ice Beam') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Beam Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Beam Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Beam Effect</h1>
            <p>Drift and Rush Shards: Increases the range of the beam</p>
            <p>Crystal and Perfect Lens: Increases the range and speed of the beam</p>
            <p>Glass and Magnifying Stones: Increases the range of the beam</p>
            <p>Vibrant Gem: Increases the damage of the beam</p>`
        ;
    }
}

else if (currentSelection === 'Ice Blade★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Blade Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Blade Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
           `<h1>Ice Blade Effect</h1>
            <p>Drift and Rush Shards: Increases the range of the blade</p>
            <p>Crystal and Perfect Lens: Increases the range of the blade</p>
            <p>Glass and Magnifying Stones: Increases the range of the blade</p>
            <p>Vibrant Gem: Increases the damage of the blade</p>`
        ;
    }
}
else if (currentSelection === 'Ice Spikes') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Spike Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Spike Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Spike Effect</h1>
            <p>Drift and Rush Shards: Increases the range of the spike</p>
            <p>Crystal and Perfect Lens: Increases the range of the spike</p>
            <p>Glass and Magnifying Stones: Increases the range of the spike</p>
            <p>Vibrant Gem: Increases the damage of the spike</p>`
        ;
    }
}
else if (currentSelection === 'Frozen Servants') {
    if (type === 'mod') {
        infoText = 
            `<h1>Frozen Servants Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark✅</p>
          <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Frozen Servants Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Frozen Servants Effect</h1>
            <p>Cloud and Stratus Stones: Makes the servant radius larger</p>
            <p>Drift and Rush Shards: Makes the mantra faster</p>
            <p>Vibrant Gems: ?</p>
            <p>Reversal sparks: Makes the servants aim outwards instead of inwards</p>
            <p>Blast sparks: Gives you one BIG BOY instead of a bunch of mini servants</p>`
        ;
    }
}

else if (currentSelection === 'Warden\'s Blades') {
    if (type === 'mod') {
        infoText = 
            `<h1>Warden Blades Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Warden Blades Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Warden Blades Effect</h1>
            <p>Cloud and Stratus Stones: Makes the blades and the radius larger</p>`
        ;
    }
}

else if (currentSelection === 'Ice Daggers★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Daggers Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Daggers Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Daggers Effect</h1>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Crystal and Perfect Lens: Increases range of which you can fire ice daggers</p>
            <p>Talent Frozen Pin Cushion: Landing ice daggers freezes your opponent or detonates all crystals on your opponent</p>`
        ;
    }
}

else if (currentSelection === 'Ice Chain★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Chains Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Chains Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Chains Effect</h1>
            <p>Drift and Rush Shards: Delays the chains firing</p>
            <p>Aeon and Eternal Logstones: ?</p>`
        ;
    }
}

else if (currentSelection === 'Ice Eruption★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Eruption Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark✅</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Eruption Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Eruption Effect</h1>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Round Spark: Removes the 'hitbox' and damage from the mantra altogether, and changes the function so that the ice eruption instead causes a tall and large circular ice wall around the user</p>
            <p>Glass and Magnifying Stones: Increases explosion radius of eruption</p>
            <p>Vibrant Gem: Increases mantra damage by 10%</p>`
        ;
    }
}

else if (currentSelection === 'Ice Forge★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Forge Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark✅</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Forge Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Forge Effect</h1>
            <p>Aeon and Eternal Logstones: ?</p>
             <p> Blast Spark info Causes the shuriken projectiles to explode upon impact with something</p>
          <p> Magnet Spark info If shurikens hit, teleport and aerial kick the victim.</p>
            <p>Crystal and Perfect Lens: Increases range of ice forge aura</p>
            <p>Talent Bonded Ice: Forge grants slow immunity and slight HP regen to allies within the aura</p>`
        ;
    }
}

else if (currentSelection === 'Ice Lance★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Lance Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Lance Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Lance Effect</h1>
            <p>Drift and Rush Shards: Makes the lance faster</p>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Crystal and Perfect Lens: Increases range of ice lance</p>
            <p>Talent Frozen Pin Cushion: Ice lance triggers ice daggers and ice spikes on proc</p>`
        ;
    }
}

else if (currentSelection === 'Ice Laser★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Laser Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Laser Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Laser Effect</h1>
            <p>Drift and Rush Shards: Makes the laser faster</p>
            <p>Crystal and Perfect Lens: Increases range of ice laser</p>`
        ;
    }
}

else if (currentSelection === 'Iceberg★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Iceberg Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Iceberg Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Iceberg Effect</h1>
            <p>Cloud and Stratus Stones: Makes the iceberg larger</p>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Crystal and Perfect Lens: Increases range of iceberg</p>`
        ;
    }
}

else if (currentSelection === 'Glacial Arc★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Glacial Arc Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Glacial Arc Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Glacial Arc Effect</h1>
            <p>Drift and Rush Shards: Makes the arc faster</p>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Crystal and Perfect Lens: Increases range of glacial arc</p>`
        ;
    }
}

else if (currentSelection === 'Frost Wisp★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Frost Wisp Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Frost Wisp Leveling</h1>
            <p>Increases size of ice placed on floor per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Frost Wisp Effect</h1>
            <p>Aeon and Eternal Logstones: увеличивает длительность</p>
           `
        ;
    }
}

else if (currentSelection === 'Ice Skate★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Skate Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice SkateLeveling</h1>
            <p>Slows down descension of the ice skates per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Skate Effect</h1>
            <p>нету</p>
           `
        ;
    }
}

else if (currentSelection === 'Ice Cubes★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Cubes Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Cubes Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Cubes Effect</h1>
            <p> Multiplying Spark info The Ice Cubes will shoot one by one after each other instead of all shooting at once </p>
           `
        ;
    }
}

else if (currentSelection === 'Ice Carve★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Carve Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark✅</p>
          <p>Spring Spark✅</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Carve Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Carve Effect</h1>
            <p>Round spark:?</p>
          <p>Spring Spark:?</p>
            <p>Cloud and Stratus Stones: Makes the carve bigger</p>
            <p>Crystal and Perfect Lens: Makes the range you hold it out from your character longer</p>`
    }
}


else if (currentSelection === 'Ice Flock★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Flock Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Flock Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Flock Effect</h1>
            <p>нету</p>
           `
    }
}
else if (currentSelection === 'Rising Frost★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Rising Frost Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Rising Frost Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Rising Frost Effect</h1>
            <p>Cloud and Stratus Stones: Makes the Glaive bigger</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Vibrant Gems: ?</p>`
    }
}



else if (currentSelection === 'Ice Smash★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ice Smash Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ice Smash Leveling</h1>
            <p>Increases posture dmg by (PLACEHOLDER) per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ice Smash Effect</h1>
            <p>Cloud and Stratus Stones: Makes the Glaive bigger</p>
            <p>нету ?</p>`

    }
}
 else if (currentSelection === "Fleeting Sparks") {
    if (type === "mod") {
      infoText = `<h1>Fleeting Spark Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ✅</p>
                <p>Vibrant Gem ❌</p>
                <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark✅✅</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
    } else if (type === "leveling") {
      infoText = `<h1>Fleeting Spark Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === "effect") {
      infoText = `<h1>Fleeting Spark Effect</h1>
                <p>Cloud and Stratus Stones: Increases the range and speed of the attack</p>
                <p>Magnet Spark info Doubles the orb amount, orb damage is split between all</p>
          <p>Multiplying Spark info Removes laser function, the orbs now ignore all obstacles defending the target</p>
          <p>Multiplying + Magnet Spark: Both effects are present, orbs ignore all obstacles defending the target</p>
                <p>Crystal and Perfect Lens: Increases the range of the strikes</p>
                <p>Glass and Magnifying Stones: Increases the range</p>
                <p>Vibrant Gem: ?</p>`;
    }
  }



// гейлбритх инфо
else if (currentSelection === 'Wind Blade') {
    if (type === 'mod') {
        infoText = 
            `<h1>Wind Blade Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Wind Blade Leveling</h1>
            <p>увеличивает дефолт демедж</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Wind Blade Effect</h1>
            <p>Drift and Rush Shards: Makes the blade go faster and farther</p>
            <p>Talent Tempest wind: Slide casting causes you to do an attack that sends your opponents into the sky</p>
            <p>Aeon and Eternal Logstones: ?</p>`
    }
}
else if (currentSelection === 'Tornado Kick') {
    if (type === 'mod') {
        infoText = 
            `<h1>Tornado Kick Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Tornado Kick Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Tornado Kick Effect</h1>
            <p>Drift and Rush Shards: ?</p>
            <p>Aeon and Eternal Logstones: ?</p>`
    }
}
else if (currentSelection === 'Air Force') {
    if (type === 'mod') {
        infoText = 
            `<h1>Air Force Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark✅</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Air Force Leveling</h1>
            `        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Air Force Effect</h1>
            <p>Cloud and Stratus Stones: Makes the blast larger</p>
            <p>Crystal and Perfect Lens: Makes the blast longer</p>
            <p>Reversal sparks: Instead of pushing people away, it pulls people to you if it hits</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Gale Lunge★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Gale Lunge Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Gale Lunge Leveling</h1>
            <p>Increases damage by (PLACHOLDER) every level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Gale Lunge Effect</h1>
            <p>Cloud and Stratus Stones: ?</p>
            <p>Aeon and Eternal Logstones: ?</p>`
    }
}
else if (currentSelection === 'Tornado★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Tornado Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Tornado Leveling</h1>
            <p>Increases damage by (PLACEHOLDER) every level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Tornado Effect</h1>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Crystal and Perfect Lens: ?</p>`
    }
}
else if (currentSelection === 'Heavenly Wind★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Heavenly Wind Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Heavenly Wind Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Heavenly Wind Effect</h1>
            <p>Cloud and Stratus Stones: ?</p>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Drift and Rush Shards: ?</p>`
    }
}
else if (currentSelection === 'Galetrap★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Galetrap Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Galetrap Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Galetrap Effect</h1>
            <p>Cloud and Stratus Stones: ?</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Talent Aeronade: Your traps explode upon hitting something</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Gale Punch★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Gale Punch Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Gale Punch Leveling</h1>
            <p>увеличивает демедж</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Gale Punch Effect</h1>
            <p>Cloud and Stratus Stones: ?</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Talent Vacuum Punch: Gale punch also pulls enemies in</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Wind Forge★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Wind Forge Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Wind Forge Leveling</h1>
              <p>Increases damage by (PLACHOLDER) every level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Wind Forge Effect</h1>
            <p>Crystal and Perfect Lens: Increases range to begin the wind forge (+ distance of lockon)</p>
            <p>Multiplying sparks: Splits the wind forges into multiple lock-on projectile</p>`
    }
}
else if (currentSelection === 'Twister Kicks★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Twister Kicks Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Twister Kicks Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Twister Kicks Effect</h1>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Aeon and Eternal Logstones: ?</p>`
    }
}
else if (currentSelection === 'Champion\'s Whirlthrow★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Champion's Whirlthrow Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Champion's Whirlthrow Leveling</h1>
            <p>Increases posture dmg by (PLACEHOLDER) per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Champion's Whirlthrow Effect</h1>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Rising Wind★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Rising Wind Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Rising Wind Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Rising Wind Effect</h1>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Vibrant Gems: ?</p>
            <p>Crystal and Perfect Lens: ?</p>`
    }
}
else if (currentSelection === 'Wind Gun★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Wind Gun Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Wind Gun Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Wind Gun Effect</h1>
            <p>Cloud and Stratus Stones: ?</p>
            <p>Drift and Rush Shards: ?</p>
            <p>Multiplying sparks: Turns the Wind Gun into 4 slightly spread long range bullets</p>
            <p>Blast AND Magnifying sparks: Turns the Wind Gun into 3 bursts of short range 'wind shotguns'</p>
            <p>Blast sparks: Turns the Wind Gun into a 'wind shotgun', shorter ranged but a lot more bullets</p>`
    }
}
else if (currentSelection === 'Gale Wisp★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Gale Wisp Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Gale Wisp Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Gale Wisp Effect</h1>
            <p>Aeon and Eternal Logstones: Makes the wisp last longer but adds more ritual keys to the ritual cast</p>`
    }
}
else if (currentSelection === 'Wind Carve★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Wind Carve Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Wind Carve Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Wind Carve Effect</h1>
            <p>Cloud and Stratus Stones: Makes the 'Wind Carve sphere' larger</p>
            <p>Drift and Rush Shards: ?</p>
            <p>Crystal and Perfect Lens: Increase the distance of the ball of wind on wind carve.</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Astral Wind★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Astral Wind Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Astral Wind Leveling</h1>
            <p>увеличивает дефол демедж</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Astral Wind Effect</h1>
            <p>Cloud and Stratus Stones: Makes the Astral Wind 'star' come out slower</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Pillars of Erisia★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Pillars of Erisia Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Pillars of Erisia Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Pillars of Erisia Effect</h1>
            <p>Crystal and Perfect Lens: ?</p>`
    }
}
else if (currentSelection === 'Wind Passage★★★') {
    if (type === 'mod') {
        infoText = 
            `<h1>Astral Wind Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Astral Wind Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Astral Wind Effect</h1>
            <p>Crystal and Perfect Lens: Makes the Wind Passage longer</p>
            <p>Glass and Magnifying Stones: ?</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Dark Blade') {
    if (type === 'mod') {
        infoText = 
            `<h1>Dark Blade Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark✅</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Dark Blade Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Dark Blade</h1>
            <p>Cloud and Stratus Stones: ?</p>
            <p>Aeon and Eternal Logstones: ?</p>
            <p>Tornado sparks: Adds a spinning slash at the end of the mantra</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Shadow Gun') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Gun Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Gun Leveling</h1>
            <p>Increases posture per level until guardbreak at level 5 (non-blast)
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Gun</h1>
            <p>Cloud and Stratus Stones: Makes the Shadow Gun wider</p>
            <p>Crystal or Perfect Lens: Makes the Shadow Gun longer</p>
            <p>Blast sparks: Turns the single blast Shadow Gun into multiple blasts of the Shadow Gun that hits multiple times</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Clutching Shadow') {
    if (type === 'mod') {
        infoText = 
            `<h1>Clutching Shadow Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Clutching Shadow Leveling</h1>
            <p>Increases posture by 6% per level, max level only increases by 4%
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Clutching Shadow</h1>
            <p>Crystal and Perfect Lens: ?</p>`
    }
}
else if (currentSelection === 'Shadow Chains') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Chains Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Chains Leveling</h1>
            <p>Level 5 grants 1 extra shadow chain
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Chains</h1>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Aeon and Eternal Logstones: Keeps chain slow effect on target for longer</p>`
    }
}
else if (currentSelection === 'Shadow Eruption') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Eruption Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Eruption Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Eruption</h1>
            <p>Cloud and Stratus Stones: Increases eruption size</p>
            <p>Talent Overwhelming Drain: Hitting multiple opponents dazes them	</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Shadow Seekers') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Seekers Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Seekers Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Seekers</h1>
            <p>Cloud and Stratus Stones: Adds more 'Shadow Seeker orbs'</p>
            <p>Crystal and Perfect Lens: ?</p>`
    }
}
else if (currentSelection === 'Encircle') {
    if (type === 'mod') {
        infoText = 
            `<h1>Encircle Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Encircle Leveling</h1>
            <p>Increases posture by roughly 6% per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Encircle</h1>
            <p>Glass and Magnifying Stones: ?</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Shade Devour') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shade Devour Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shade Devour Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shade Devour</h1>
            <p>Drift and Rush Shards: ?</p>
            <p>Vibrant Gems: ?</p>
            <p>Blast sparks: Blast radius increases drastically, also guardbreaks</p>
            <p>Multiplying sparks: Blasts increase from 1 to 3, with the third knocking your opponent back</p>
            <p>Blast and Multiplying sparks: The 3 blasts from multiplying dramatically gain size, and the blasts guardbreak</p>
            <p>Aeon and Eternal Logstones: ?</p>`
    }
}
else if (currentSelection === 'Shadow Roar') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Roar Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Roar Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Roar</h1>
            <p>Drift and Rush Shards: ?</p>
            <p>Vibrant Gems: ?</p>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Talent Blossoming Shadow: The more hits you land the larger your shadow roar becomes</p>`
    }
}
else if (currentSelection === 'Rising Shadow') {
    if (type === 'mod') {
        infoText = 
            `<h1>Rising Shadow Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Rising Shadow Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Rising Shadow</h1>
            <p>Cloud and Stratus Stones: Makes the tendril lock on farther</p>
            <p>Drift and Rush Shards: Makes the 'Rising Shadow tendril' faster</p>
            <p>Blast sparks: The 'Rising Shadow tendril' will no longer make opponents rise up, but instead, will keep the tendril on them. If the opponent with the tendril on them tries to cast a mantra, a portion of of ether will be returned to you.</p>`
    }
}
else if (currentSelection === 'Shadow Meteor') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Meteor Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Meteor Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Meteor</h1>
            <p>Crystal and Perfect Lens: ?</p>
            <p>Vibrant Gems: ?</p>`
    }
}
else if (currentSelection === 'Devouring Eye') {
    if (type === 'mod') {
        infoText = 
            `<h1>Devouring Eye Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Devouring Eye Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Devouring Eye</h1>
            <p>Glass and Magnifying Stones: Increases range of the Eye</p>`
    }
}
else if (currentSelection === 'Shade Wisp') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shade Wisp Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shade Wisp Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shade Wisp</h1>
            <p>Aeon and Eternal Logstones: Makes the wisp last longer but adds more ritual keys to the ritual cast</p>`
    }
}
else if (currentSelection === 'Shadow Assault') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Assault Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Assault Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Assault</h1>
            <p>Crystal and Perfect Lens: Makes the Shadow Assault go further</p>
            <p>Glass and Magnifying Stones: Makes the hitbox of Shadow Assault larger and possibly makes it go further but needs testing</p>
            <p>Vibrant Gems: ?</p>
            <p>Blast sparks: Unleashes a rapid flurry of attacks on those hit if your HP is below 40%</p>`
    }
}
else if (currentSelection === 'Eclipse Kick') {
    if (type === 'mod') {
        infoText = 
            `<h1>Eclipse Kick Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ❌</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Eclipse Kick Leveling</h1>
            <p>Increases posture dmg by (PLACEHOLDER) per level
</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Eclipse Kick</h1>
            <p>Crystal and Perfect Lens: Makes the Shadow Assault go further</p>
            <p>Glass and Magnifying Stones: Makes the hitbox of Shadow Assault larger and possibly makes it go further but needs testing</p>
            <p>Vibrant Gems: ?</p>
            <p>Multiplying Spark info Eclipse Kick's windup will be a lot faster, and the animation changes. It will now perform a kick that dazes even if blocked or dodged. If this modified Eclipse Kick lands, you can cast it again to perform the regular Eclipse Kick.</p>
`    }
}
else if (currentSelection === 'Shade Bringer') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shade Bringer Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
                      <p>Spring Spark✅✅</p>
                      <p>Magnet Spark❌</p>
                      <p>Tornado Spark❌</p>
                      <p>Multiplying Spark✅✅</p>
                      <p>Reversal Spark❌</p>
                      <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shade Bringer Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shade Bringer</h1>
            <p>Drift and Rush Shards: ?</p>
            <p>Vibrant Gems: ?</p>
            <p>Multiplying sparks: Will make Shadebringer do 2 more swings after the first swing</p>
            <p>Spring AND Multiplying sparks: Makes you do the flip attack first, then the two slashes</p>
            <p>Spring sparks: Will make Shadebringer to make you jump up and then slam back down with the 'Shadebringer sword'</p>`
    }
}
else if (currentSelection === 'Shadow Vortex') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shadow Vortex Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>  
            <p>Vibrant Gem ✅</p>
            <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`
        ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shadow Vortex Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`
        ;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shadow Vortex</h1>
            <p>Glass and Magnifying Stones: Increases size greatly</p>
            <p>Vibrant Gems: ?</p>`
    }
}
 else if (currentSelection === "Metal Eruption") {
  if (type === "mod") {
    infoText = `<h1>Metal Eruption Modification</h1>
              <p>Cloud Stone/Stratus Stone ✅</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ✅</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Eruption Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Eruption</h1>
              <p>Cloud and Stratus Stones: Makes the 'eruption' larger</p>
              <p>Aeon and Eternal Logstones: ?</p>
              <p>Vibrant Gems: ?</p>`;
  }
} else if (currentSelection === "Needle Barrage") {
  if (type === "mod") {
    infoText = `<h1>Needle Barrage Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark✅</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Needle Barrage Leveling</h1>
              <p>Increases amount of rods thrown per level up to 6 rods thrown
</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Needle Barrage</h1>
              <p>Blast Spark: Shoots more needles but removes the jump, you keep your momentum however. Also makes it shoot only in front of you, as well as increases windup</p>`;
  }
} else if (currentSelection === "Metal Rampart") {
  if (type === "mod") {
    infoText = `<h1>Metal Rampart Modification</h1>
              <p>Cloud Stone/Stratus Stone ✅</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Rampart Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Rampart</h1>
              <p>Cloud and Stratus Stones: ?</p>
              <p>Aeon and Eternal Logstones: ?</p>`;
  }
} else if (currentSelection === "Metal Kick") {
  if (type === "mod") {
    infoText = `<h1>Metal Kick Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark✅</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Kick Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Kick</h1>
              <p>Spring Spark: Metal Kick will become a faster drop kick but removes the knockdown effect</p>`;
  }
} else if (currentSelection === "Iron Skin") {
  if (type === "mod") {
    infoText = `<h1>Iron Skin Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Iron Skin Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Iron Skin</h1>
              <p>Aeon and Eternal Logstone: Makes Iron Skin last longer</p>
              <p>Multiplying Spark: ?</p>
              <p>Talent Intuitive Repairs: Iron skin now repairs your armour and natural armour</p>`;
  }
} else if (currentSelection === "Chain Pull") {
  if (type === "mod") {
    infoText = `<h1>Chain Pull Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ✅</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ✅</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark✅</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Chain Pull Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Chain Pull</h1>
              <p>Crystal and Perfect Lens: ?</p>
              <p>Vibrant Gems: ?</p>
              <p>Reversal Spark: Makes the 'chain' of Chain Pull push opponents away instead of pulling them towards you</p>`;
  }
} else if (currentSelection === "Metal Rain") {
  if (type === "mod") {
    infoText = `<h1>Metal Rain Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ✅</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Rain Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Rain</h1>
              <p>Aeon and Eternal Logstones: ?</p>
              <p>Crystal and Perfect Lens: ?</p>`;
  }
} else if (currentSelection === "Caltrops") {
  if (type === "mod") {
    infoText = `<h1>Caltrops Modification</h1>
              <p>Cloud Stone/Stratus Stone ✅</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Caltrops Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Caltrops</h1>
              <p>Cloud and Stratus Stones: Does nothing</p>
              <p>Aeon and Eternal Logstones: ?</p>
              <p>Talent Laced Traps: Anyone hit by your caltrops can no longer jump</p>`;
  }
} else if (currentSelection === "Firing Line") {
  if (type === "mod") {
    infoText = `<h1>Firing Line Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Firing Line Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Firing Line</h1>
              <p>Drift and Rush Shards: ?</p>`;
  }
} else if (currentSelection === "Metal Fakeout") {
  if (type === "mod") {
    infoText = `<h1>Metal Fakeout Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Fakeout Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Fakeout</h1>
              <p>N/A</p>`;
  }
} else if (currentSelection === "Oxidizing Rush") {
  if (type === "mod") {
    infoText = `<h1>Oxidizing Rush Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ✅</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Oxidizing Rush Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Oxidizing Rush</h1>
              <p>Crystal and Perfect Lens: ?</p>
              <p>Aeon and Eternal Logstones: ?</p>`;
  }
} else if (currentSelection === "Metal Ball") {
  if (type === "mod") {
    infoText = `<h1>Metal Ball Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Ball Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Ball</h1>
              <p>Aeon and Eternal Logstones: ?</p>`;
  }
} else if (currentSelection === "Metal Wisp") {
  if (type === "mod") {
    infoText = `<h1>Metal Wisp Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Wisp Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Wisp</h1>
              <p>Aeon and Eternal Logstones: Makes the wisp last longer but adds more ritual keys to the ritual cast</p>`;
  }
} else if (currentSelection === "Metal Armament") {
  if (type === "mod") {
    infoText = `<h1>Metal Armament Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Armament Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Armament</h1>
              <p>N/A</p>`;
  }
} else if (currentSelection === "Metal Gatling") {
  if (type === "mod") {
    infoText = `<h1>Metal Gatling Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Metal Gatling Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Metal Gatling</h1>
              <p>N/A</p>`;
  }
} else if (currentSelection === "Iron Slam") {
  if (type === "mod") {
    infoText = `<h1>Iron Slam Modification</h1>
              <p>Cloud Stone/Stratus Stone ✅</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Iron Slam Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Iron Slam</h1>
              <p>Cloud and Stratus Stones: Increases the slam hitbox</p>`;
  }
} else if (currentSelection === "Iron Hug") {
  if (type === "mod") {
    infoText = `<h1>Iron Hug Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Iron Hug Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Iron Hug</h1>
              <p>Talent Metal Absorption: Anyone hit by iron hug has their armour drained</p>`;
  }
} else if (currentSelection === "Rocket Lance") {
  if (type === "mod") {
    infoText = `<h1>Rocket Lance Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Rocket Lance Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Rocket Lance</h1>
              <p>N/A</p>`;
  }
} else if (currentSelection === "Flashfire Sweep") {
  if (type === "mod") {
    infoText = `<h1>Flashfire Sweep Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ✅</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ✅</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Flashfire Sweep Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Flashfire Sweep</h1>
    <p>Vibrant Gems: ?</p>
  <p>Crystal and Perfect Lens: Increases distance of the sweep</p>`;
  }
} else if (currentSelection === "Iron Tether") {
  if (type === "mod") {
    infoText = `<h1>Iron Tether Modification</h1>
              <p>Cloud Stone/Stratus Stone ✅</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ✅</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark✅</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark✅</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Iron Tether Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Iron Tether</h1>
    <p>Aeon and Eternal Logstones: Increases duration of trap</p>
    <p>Multiplying Spark: Gives the user three tethers instead of 1</p>
  <p>Magnet Spark: Makes the tether move</p>`;
  }
} else if (currentSelection === "Permafrost Prison★") {
  if (type === "mod") {
    infoText = `<h1>Permafrost Prison Modification</h1>
              <p>Cloud Stone/Stratus Stone ✅</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ✅</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark✅</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Permafrost Prison Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Permafrost Prison</h1>
    <p>Cloud and Stratus Stones: Makes the prison bigger</p>
    <p>Aeon and Eternal Logstones: Makes it impale targets with more spikes</p>
  <p>Magnet Spark: Your prison now follows you </p>`;
  }
} else if (currentSelection === "Tempest Blitz★") {
  if (type === "mod") {
    infoText = `<h1>Tempest Blitz Modification</h1>
              <p>Cloud Stone/Stratus Stone ❌</p>
              <p>Drift Shard/Rush Shard ❌</p>
              <p>Aeon Logstone/Eternal Logstone ❌</p>
              <p>Crystal Lens/Perfect Lens ❌</p>
              <p>Glass Stone/Magnifying Stone ❌</p>  
              <p>Vibrant Gem ❌</p>
              <p>Round spark❌</p>
          <p>Spring Spark❌</p>
          <p>Magnet Spark❌</p>
          <p>Tornado Spark❌</p>
          <p>Multiplying Spark❌</p>
          <p>Reversal Spark❌</p>
          <p>Blast Spark❌</p>`;
  } else if (type === "leveling") {
    infoText = `<h1>Tempest Blitz Leveling</h1>
              <p>У этой мантры нет левелинг эффектов</p>`;
  } else if (type === "effect") {
    infoText = `<h1>Tempest Blitz</h1>
  <p>N/A</p>`;
  }
  

}
// oaths инфо
else if (currentSelection === "Arc Suit") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ✅</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ✅</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ✅</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Aeon and Eternal Logstones: Increases the duration of the Arc Suit up to a full minute, increases cooldown alongside this however</p>
          <p>Vibrant Gems: Gives Arc Suit physical resistance. If Arc Suit is active, your physical resistance is increased (14% max).</p>
      `;
  }
}

else if (currentSelection === "Arc Beam") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ✅</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Arc Wave") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ✅</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Mindsoothe") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ✅</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Glass and Magnifying Stones: Increases range of healing.</p>
      `;
  }
}

else if (currentSelection === "Tranquil Circle") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ✅</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Magnet Spark: Makes the Tranquil Circle smaller, but also makes the circle follow you; however, it does not work in water.</p>
      `;
  }
}

else if (currentSelection === "Sightless Beam") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Equalizer") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Lord/s Slice") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Judgement") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Radiant Kick") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ✅</p>
          <p>Drift Shard/Rush Shard ✅</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Blinding Dawn") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ✅</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Crystal and Perfect Lenses: ?</p>
      `;
  }
}

else if (currentSelection === "Radiant Dawn") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ✅</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Crystal and Perfect Lenses: ?</p>
      `;
  }
}

else if (currentSelection === "Precision Cuts") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Close Shave") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Fake Strike") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ✅</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ✅</p>
          <p>Round Spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Crystal and Perfect Lenses: ??</p>
          <p>vibrant gems: ??</p>
      `;
  }
}

else  if (currentSelection === "Jet Kick ") {
  if (type === "mod") {
    infoText = `
      <h1>${currentSelection} Modification</h1>
      <p>Cloud Stone/Stratus Stone ❌</p>
      <p>Drift Shard/Rush Shard ❌</p>
      <p>Aeon Logstone/Eternal Logstone ❌</p>
      <p>Crystal Lens/Perfect Lens ✅</p>
      <p>Glass Stone/Magnifying Stone ❌</p>
      <p>Vibrant Gem ✅</p>
      <p>Round Spark ❌</p>
      <p>Spring Spark ❌</p>
      <p>Magnet Spark ❌</p>
      <p>Tornado Spark ❌</p>
      <p>Multiplying Spark ❌</p>
      <p>Reversal Spark ❌</p>
      <p>Blast Spark ❌</p>
    `;
  } else if (type === "leveling") {
    infoText = `
      <h1>${currentSelection} Leveling</h1>
      <p>У этой мантры нет левелинг эффектов</p>
    `;
  } else if (type === "effect") {
    infoText = `
      <h1>${currentSelection} Effect</h1>
      <p>Vibrant Gem ??? </p>
      <p>Crystal Lens/Perfect Lens ???</p>
    `;
  }
} else if (currentSelection === "Symbiotic Sustain") {
  if (type === "mod") {
    infoText = `
      <h1>${currentSelection} Modification</h1>
      <p>Cloud Stone/Stratus Stone ❌</p>
      <p>Drift Shard/Rush Shard ❌</p>
      <p>Aeon Logstone/Eternal Logstone ❌</p>
      <p>Crystal Lens/Perfect Lens ❌</p>
      <p>Glass Stone/Magnifying Stone ❌</p>
      <p>Vibrant Gem ❌</p>
      <p>Round Spark ❌</p>
      <p>Spring Spark ❌</p>
      <p>Magnet Spark ❌</p>
      <p>Tornado Spark ❌</p>
      <p>Multiplying Spark ❌</p>
      <p>Reversal Spark ❌</p>
      <p>Blast Spark ❌</p>
    `;
  } else if (type === "leveling") {
    infoText = `
      <h1>${currentSelection} Leveling</h1>
      <p>У этой мантры нет левелинг эффектов</p>
    `;
  } else if (type === "effect") {
    infoText = `
      <h1>${currentSelection} Effect</h1>
      <p>???</p>
    `;
  }
} else if (currentSelection === "Symbiotic Link") {
  if (type === "mod") {
    infoText = `
      <h1>${currentSelection} Modification</h1>
      <p>Cloud Stone/Stratus Stone ❌</p>
      <p>Drift Shard/Rush Shard ❌</p>
      <p>Aeon Logstone/Eternal Logstone ❌</p>
      <p>Crystal Lens/Perfect Lens ❌</p>
      <p>Glass Stone/Magnifying Stone ❌</p>
      <p>Vibrant Gem ❌</p>
      <p>Round Spark ❌</p>
      <p>Spring Spark ❌</p>
      <p>Magnet Spark ❌</p>
      <p>Tornado Spark ❌</p>
      <p>Multiplying Spark ❌</p>
      <p>Reversal Spark ❌</p>
      <p>Blast Spark ❌</p>
    `;
  } else if (type === "leveling") {
    infoText = `
      <h1>${currentSelection} Leveling</h1>
      <p>У этой мантры нет левелинг эффектов</p>
    `;
  } else if (type === "effect") {
    infoText = `
      <h1>${currentSelection} Effect</h1>
      <p>???</p>
    `;
  }
} else if (currentSelection === "Parasitic Leech") {
  if (type === "mod") {
    infoText = `
      <h1>${currentSelection} Modification</h1>
      <p>Cloud Stone/Stratus Stone ❌</p>
      <p>Drift Shard/Rush Shard ❌</p>
      <p>Aeon Logstone/Eternal Logstone ❌</p>
      <p>Crystal Lens/Perfect Lens ❌</p>
      <p>Glass Stone/Magnifying Stone ❌</p>
      <p>Vibrant Gem ❌</p>
      <p>Round Spark ❌</p>
      <p>Spring Spark ❌</p>
      <p>Magnet Spark ❌</p>
      <p>Tornado Spark ❌</p>
      <p>Multiplying Spark ❌</p>
      <p>Reversal Spark ❌</p>
      <p>Blast Spark ❌</p>
    `;
  } else if (type === "leveling") {
    infoText = `
      <h1>${currentSelection} Leveling</h1>
      <p>У этой мантры нет левелинг эффектов</p>
    `;
  } else if (type === "effect") {
    infoText = `
      <h1>${currentSelection} Effect</h1>
      <p>???.</p>
    `;
  }
}
 else if (currentSelection === "Ascension") {
    if (type === "mod") {
      infoText = `
        <h1>${currentSelection} Modification</h1>
        <p>Cloud Stone/Stratus Stone ❌</p>
        <p>Drift Shard/Rush Shard ❌</p>
        <p>Aeon Logstone/Eternal Logstone ❌</p>
        <p>Crystal Lens/Perfect Lens ❌</p>
        <p>Glass Stone/Magnifying Stone ❌</p>
        <p>Vibrant Gem ✅</p>
        <p>Round Spark ❌</p>
        <p>Spring Spark ❌</p>
        <p>Magnet Spark ❌</p>
        <p>Tornado Spark ❌</p>
        <p>Multiplying Spark ❌</p>
        <p>Reversal Spark ❌</p>
        <p>Blast Spark ❌</p>
      `;
    } else if (type === "leveling") {
      infoText = `
        <h1>${currentSelection} Leveling</h1>
        <p>У этой мантры нет левелинг эффектов</p>
      `;
    } else if (type === "effect") {
      infoText = `
        <h1>${currentSelection} Effect</h1>
        <p>Vibrant Gems: ?</p>
      `;
    }
}else if (currentSelection === "Sinister Halo") {
    if (type === "mod") {
      infoText = `
        <h1>${currentSelection} Modification</h1>
        <p>Cloud Stone/Stratus Stone ❌</p>
        <p>Drift Shard/Rush Shard ❌</p>
        <p>Aeon Logstone/Eternal Logstone ❌</p>
        <p>Crystal Lens/Perfect Lens ❌</p>
        <p>Glass Stone/Magnifying Stone ❌</p>
        <p>Vibrant Gem ✅</p>
        <p>Round Spark ❌</p>
        <p>Spring Spark ❌</p>
        <p>Magnet Spark ❌</p>
        <p>Tornado Spark ❌</p>
        <p>Multiplying Spark ❌</p>
        <p>Reversal Spark ❌</p>
        <p>Blast Spark ❌</p>
      `;
    } else if (type === "leveling") {
      infoText = `
        <h1>${currentSelection} Leveling</h1>
        <p>У этой мантры нет левелинг эффектов</p>
      `;
    } else if (type === "effect") {
      infoText = `
        <h1>${currentSelection} Effect</h1>
        <p>Vibrant Gems: ?</p>
      `;
    }
}else if (currentSelection === "Celestial Assault") {
    if (type === "mod") {
      infoText = `
        <h1>${currentSelection} Modification</h1>
        <p>Cloud Stone/Stratus Stone ❌</p>
        <p>Drift Shard/Rush Shard ❌</p>
        <p>Aeon Logstone/Eternal Logstone ❌</p>
        <p>Crystal Lens/Perfect Lens ❌</p>
        <p>Glass Stone/Magnifying Stone ❌</p>
        <p>Vibrant Gem ✅</p>
        <p>Round Spark ❌</p>
        <p>Spring Spark ❌</p>
        <p>Magnet Spark ❌</p>
        <p>Tornado Spark ❌</p>
        <p>Multiplying Spark ❌</p>
        <p>Reversal Spark ❌</p>
        <p>Blast Spark ❌</p>
      `;
    } else if (type === "leveling") {
      infoText = `
        <h1>${currentSelection} Leveling</h1>
        <p>У этой мантры нет левелинг эффектов</p>
      `;
    } else if (type === "effect") {
      infoText = `
        <h1>${currentSelection} Effect</h1>
        <p>Vibrant Gems: ?</p>
      `;
    }
}else if (currentSelection === "Illusory Counter") {
    if (type === "mod") {
      infoText = `
        <h1>${currentSelection} Modification</h1>
        <p>Cloud Stone/Stratus Stone ❌</p>
        <p>Drift Shard/Rush Shard ❌</p>
        <p>Aeon Logstone/Eternal Logstone ❌</p>
        <p>Crystal Lens/Perfect Lens ❌</p>
        <p>Glass Stone/Magnifying Stone ❌</p>
        <p>Vibrant Gem ❌</p>
        <p>Round Spark ❌</p>
        <p>Spring Spark ❌</p>
        <p>Magnet Spark ❌</p>
        <p>Tornado Spark ❌</p>
        <p>Multiplying Spark ❌</p>
        <p>Reversal Spark ❌</p>
        <p>Blast Spark ❌</p>
      `;
    } else if (type === "leveling") {
      infoText = `
        <h1>${currentSelection} Leveling</h1>
        <p>У этой мантры нет левелинг эффектов</p>
      `;
    } else if (type === "effect") {
      infoText = `
        <h1>${currentSelection} Effect</h1>
        <p>N/A</p>
      `;
    }
}else if (currentSelection === "Illusory Realm") {
    if (type === "mod") {
      infoText = `
        <h1>${currentSelection} Modification</h1>
        <p>Cloud Stone/Stratus Stone ❌</p>
        <p>Drift Shard/Rush Shard ❌</p>
        <p>Aeon Logstone/Eternal Logstone ✅</p>
        <p>Crystal Lens/Perfect Lens ❌</p>
        <p>Glass Stone/Magnifying Stone ❌</p>
        <p>Vibrant Gem ❌</p>
        <p>Round Spark ❌</p>
        <p>Spring Spark ❌</p>
        <p>Magnet Spark ✅</p>
        <p>Tornado Spark ❌</p>
        <p>Multiplying Spark ✅</p>
        <p>Reversal Spark ❌</p>
        <p>Blast Spark ❌</p>
      `;
    } else if (type === "leveling") {
      infoText = `
        <h1>${currentSelection} Leveling</h1>
        <p>У этой мантры нет левелинг эффектов</p>
      `;
    } else if (type === "effect") {
      infoText = `
        <h1>${currentSelection} Effect</h1>
        <p>Aeon and Eternal Logstones: Increases Illusory realm duration</p>
        <p>Magnet Spark: Makes you the 'center' of the realm</p>
        <p>Multiplying Spark: Makes the realm attempt more catches</p>
      `;
    }
}else if (currentSelection === "Illusory Servants") {
    if (type === "mod") {
      infoText = `
        <h1>${currentSelection} Modification</h1>
        <p>Cloud Stone/Stratus Stone ❌</p>
        <p>Drift Shard/Rush Shard ❌</p>
        <p>Aeon Logstone/Eternal Logstone ✅</p>
        <p>Crystal Lens/Perfect Lens ❌</p>
        <p>Glass Stone/Magnifying Stone ❌</p>
        <p>Vibrant Gem ❌</p>
        <p>Round Spark ❌</p>
        <p>Spring Spark ❌</p>
        <p>Magnet Spark ❌</p>
        <p>Tornado Spark ❌</p>
        <p>Multiplying Spark ❌</p>
        <p>Reversal Spark ❌</p>
        <p>Blast Spark ❌</p>
      `;
    } else if (type === "leveling") {
      infoText = `
        <h1>${currentSelection} Leveling</h1>
        <p>У этой мантры нет левелинг эффектов</p>
      `;
    } else if (type === "effect") {
      infoText = `
        <h1>${currentSelection} Effect</h1>
        <p>Aeon and Eternal Logstones: Makes the Illusory Servants last longer before disappearing</p> `;
    }
}


// монстр мантры инфо
  
  
else if (currentSelection === "Brachial Spear") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
            <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>N/A</p>
      `;
  }
}


else if (currentSelection === "Coral Spear") {
  if (type === "mod") {
      infoText = `
          <h1>Coral Spear Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
             <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>Coral Spear Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>Coral Spear Effect</h1>
          <p>N/A</p>
      `;
  } 
}

else if (currentSelection === "Dread Breath") {
  if (type === "mod") {
      infoText = `
          <h1>Dread Breath Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>Dread Breath Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>Dread Breath Effect</h1>
          <p>N/A</p>
      `;
  }
}

else if (currentSelection === "Beast Burrow") {
  if (type === "mod") {
      infoText = `
          <h1>Beast Burrow Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
           <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>Beast Burrow Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>Beast Burrow Effect</h1>
          <p>N/A</p>
      `;
  } 
}

else if (currentSelection === "Enforcer Pull") {
  if (type === "mod") {
      infoText = `
          <h1>Enforcer Pull Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ✅</p>
          <p>Crystal Lens/Perfect Lens ✅</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
          <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>Enforcer Pull Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>Enforcer Pull Effect</h1>
          <p>Aeon and Eternal Logstones: ?</p>
          <p>Crystal and Perfect Lens: Makes the 'reach range' of Enforcer Pull go further</p>
      `;
  } 
}

else if (currentSelection === "Mecha Gatling") {
  if (type === "mod") {
      infoText = `
          <h1>Mecha Gatling Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ❌</p>
          <p>Aeon Logstone/Eternal Logstone ✅</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
           <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>Mecha Gatling Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>Mecha Gatling Effect</h1>
          <p>Aeon and Eternal Logstones: Increases the amount of 'Whirl' attacks</p>
      `;
  } 
}

else if (currentSelection === "Whirling Blade") {
  if (type === "mod") {
      infoText = `
          <h1>${currentSelection} Modification</h1>
          <p>Cloud Stone/Stratus Stone ❌</p>
          <p>Drift Shard/Rush Shard ✅</p>
          <p>Aeon Logstone/Eternal Logstone ❌</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
           <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>${currentSelection} Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>${currentSelection} Effect</h1>
          <p>Drift and Rush Shards: Does absolutely nothing</p>
      `;
  } 
}

else if (currentSelection === "Abyssal Ridge") {
  if (type === "mod") {
      infoText = `
          <h1>Abyssal Ridge Modification</h1>
          <p>Cloud Stone/Stratus Stone ✅</p>
          <p>Drift Shard/Rush Shard ✅</p>
          <p>Aeon Logstone/Eternal Logstone ✅</p>
          <p>Crystal Lens/Perfect Lens ❌</p>
          <p>Glass Stone/Magnifying Stone ❌</p>
          <p>Vibrant Gem ❌</p>
            <h1>.... sparks</h1>
          <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>
      `;
  } else if (type === "leveling") {
      infoText = `
          <h1>Abyssal Ridge Leveling</h1>
          <p>У этой мантры нет левелинг эффектов</p>
      `;
  } else if (type === "effect") {
      infoText = `
          <h1>Abyssal Ridge Effect</h1>
          <p>Cloud and Stratus Stones: ?</p>
          <p>Drift and Rush Shards: ?</p>
          <p>Aeon and Eternal Logstones: ?</p>
      `;
  }
}




else if (currentSelection === 'STRONG LEFT') {
    if (type === 'mod') {
        infoText = 
            `<h1>STRONG LEFT Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
             <p>Round spark ❌</p>
          <p>Spring Spark ❌</p>
          <p>Magnet Spark ❌</p>
          <p>Tornado Spark ❌</p>
          <p>Multiplying Spark ❌</p>
          <p>Reversal Spark ❌</p>
          <p>Blast Spark ❌</p>`
            ;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>STRONG LEFT Leveling</h1>
            <p>Increases posture dmg by (PLACEHOLDER) per level</p>
            <p>Increases destructive power per level</p>
            <p>Decreases cooldown by (PLACEHOLDER) per level
</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>STRONG LEFT Effect</h1>
            <p>нет эффектов</p>`;
    }
}
else if (currentSelection === 'Rapid Punches') {
    if (type === 'mod') {
        infoText = 
            `<h1>Rapid Punches Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Rapid Punches Leveling</h1>
            <p>Increases damage each level</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Rapid Punches Effect</h1>
            <p>Crystal and Perfect Lens: ?
</p>
            <p>Vibrant Gems: ?
</p>
            <p>??</p>`;
    }
}

else if (currentSelection === 'Skyshatter Kick') {
    if (type === 'mod') {
        infoText = 
            `<h1>Skyshatter Kick Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ✅</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Skyshatter Kick Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Skyshatter Kick Effect</h1>
            <p>Round Spark: Stomp on the ground, launching your opponents and yourself upward</p>
            
        `;
    }
}
else if (currentSelection === 'Karita Leap') {
    if (type === 'mod') {
        infoText = 
            `<h1>Karita Leap Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Karita Leap Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Karita Leap Effect</h1>
            <p>Crystal and Perfect Lens: ?</p>
            `;
    }
}

else if (currentSelection === 'Karita Divebomb') {
    if (type === 'mod') {
        infoText = 
            `<h1>Karita Divebomb Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ✅</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Karita Divebomb Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Karita Divebomb Effect</h1>
            <p>Crystal and Perfect Lens: ??</p>
            <p>Tornado Spark: ?</p>
            `;
    }
}

else if (currentSelection === 'Tacet Drop Kick') {
    if (type === 'mod') {
        infoText = 
            `<h1>Tacet Drop Kick Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Tacet Drop Kick Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Tacet Drop Kick Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Rally') {
    if (type === 'mod') {
        infoText = 
            `<h1>Rally Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Rally Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Rally Effect</h1>
            <p>Aeon and Eternal Logstones: ?
</p>
            <p>Crystal and Perfect Lens: ?
</p>
            <p>Vibrant Gems: ?
</p>`;
    }
} else if (currentSelection === 'Reinforce') {
    if (type === 'mod') {
        infoText = 
            `<h1>Reinforce Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Reinforce Leveling</h1>
            <p>Decreases cooldown of reinforce by 5 seconds per level</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Reinforce Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Brace') {
    if (type === 'mod') {
        infoText = 
            `<h1>Brace Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Brace Leveling</h1>
            <p>Increases duration by 2 seconds per level up to a max duration of 8 seconds</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Brace Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Shoulder Bash') {
    if (type === 'mod') {
        infoText = 
            `<h1>Shoulder Bash Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ✅</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Shoulder Bash Leveling</h1>
            <p>Increases damage by an average of 6.76 per level</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Shoulder Bash Effect</h1>
            <p>Blast Spark: Shoulder bash now has knockback</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Dash') {
    if (type === 'mod') {
        infoText = 
            `<h1>Dash Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ✅</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Dash Leveling</h1>
            <p>Increases distance of dash per level
</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Dash Effect</h1>
            <p>Crystal and Perfect Lens: Increases the length of the dash
</p>
            <p>Spring Spark: Turns Dash into 3 shorter dashes that can be used after each other
</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Revenge') {
    if (type === 'mod') {
        infoText = 
            `<h1>Revenge Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Revenge Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Revenge Effect</h1>
            <p>Drift and Rush Shards: Increases the range of revenge
</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Adrenaline Surge') {
    if (type === 'mod') {
        infoText = 
            `<h1>Adrenaline Surge Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ✅</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Adrenaline Surge Leveling</h1>
            <p>Reduces cooldown by 11.25 seconds per level
</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Adrenaline Surge Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Summon Cauldron') {
    if (type === 'mod') {
        infoText = 
            `<h1>Summon Cauldron Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Summon Cauldron Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Summon Cauldron Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Prediction') {
    if (type === 'mod') {
        infoText = 
            `<h1>Prediction Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Prediction Leveling</h1>
            <p>Increases prediction frames by (PLACEHOLDER) every level
</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Prediction Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Gaze') {
    if (type === 'mod') {
        infoText = 
            `<h1>Gaze Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ✅</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Gaze Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Gaze Effect</h1>
            <p>Aeon and Eternal Logstones: Increase time Gaze is up, but increases cooldown aswell
</p>
            <p>Crystal and Perfect Lens: Increases range of invisible Gaze projectiles
</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Glare') {
    if (type === 'mod') {
        infoText = 
            `<h1>Glare Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Glare Leveling</h1>
            <p>нету</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Glare Effect</h1>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Exhaustion Strike') {
    if (type === 'mod') {
        infoText = 
            `<h1>Exhaustion Strike Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Exhaustion Strike Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>
            <p>Each level grants +12.5% more posture transfer, from 50% LV1, 62.5% LV2, 75% LV3, 87.5% LV4, 100% LV5
</p>
<p>Damage changes: 20, 22, 24, 26 and 28 (+2 per level)</p>`;
            
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Exhaustion Strike Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Taunt') {
    if (type === 'mod') {
        infoText = 
            `<h1>Taunt Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Taunt Leveling</h1>
            <p>Increases duration by 1s per level to a maximum of 15s
</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Taunt Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Sing') {
    if (type === 'mod') {
        infoText = 
            `<h1>Sing Modification</h1>
            <p>Cloud Stone/Stratus Stone ✅</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Sing Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Sing Effect</h1>
            <p>Cloud and Stratus Stones: Increases 'Charm' range
</p>
            <p>??</p>
            <p>??</p>`;
    }
}

else if (currentSelection === 'Disguise') {
    if (type === 'mod') {
        infoText = 
            `<h1>Disguise Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ✅</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ✅</p>
            <p>Reversal Spark ✅</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Disguise Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Disguise Effect</h1>
            <p>Reversal Spark: Turns you into a Statue
</p>
            <p>Tornado Spark: Turns you into a Crate
</p>
            <p>Blast Spark: Turns you into a Lantern
</p>
<p>Reversal AND Tornado Spark: Turns you into a Gobletto
</p>
<p>Blast AND Tornado Spark (Placed in that order): Turns you into an unlit campfire
</p>
<p>Tornado AND Blast Spark: (Placed in that order): Turns you into a lit campfire
</p>
<p>Reversal AND Blast Spark: Turns you into a Skull
</p>
`;
    }
} else if (currentSelection === 'Rapid Slashes') {
    if (type === 'mod') {
        infoText = 
            `<h1>Rapid Slashes Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Rapid Slashes Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Rapid Slashes Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Ceaseless Slashes') {
    if (type === 'mod') {
        infoText = 
            `<h1>Ceaseless Slashes Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ✅</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Ceaseless Slashes Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Ceaseless Slashes Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Master/s Flourish') {
    if (type === 'mod') {
        infoText = 
            `<h1>Master's Flourish Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Master's Flourish Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Master's Flourish Effect</h1>
            <p>Glass and Magnifying Stones: Makes the flourish larger
</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Twincleave') {
    if (type === 'mod') {
        infoText = 
            `<h1>Twincleave Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Twincleave Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Twincleave Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Prominence Draw') {
    if (type === 'mod') {
        infoText = 
            `<h1>Prominence Draw Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Prominence Draw Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Prominence Draw Effect</h1>
            <p>Glass and Magnifying Stones: ?
</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Flashdraw Strike') {
    if (type === 'mod') {
        infoText = 
            `<h1>Flashdraw Strike Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ✅</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem </p>
            <p>Round Spark ✅</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Flashdraw Strike Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Flashdraw Strike Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Pressure Blast') {
    if (type === 'mod') {
        infoText = 
            `<h1>Pressure Blast Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Pressure Blast Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Pressure Blast Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Punishment') {
    if (type === 'mod') {
        infoText = 
            `<h1>Punishment Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ❌</p>
            <p>Vibrant Gem ✅</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Punishment Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Punishment Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
} else if (currentSelection === 'Onslaught') {
    if (type === 'mod') {
        infoText = 
            `<h1>Onslaught Modification</h1>
            <p>Cloud Stone/Stratus Stone ❌</p>
            <p>Drift Shard/Rush Shard ❌</p>
            <p>Aeon Logstone/Eternal Logstone ❌</p>
            <p>Crystal Lens/Perfect Lens ❌</p>
            <p>Glass Stone/Magnifying Stone ✅</p>
            <p>Vibrant Gem ❌</p>
            <p>Round Spark ❌</p>
            <p>Spring Spark ❌</p>
            <p>Magnet Spark ❌</p>
            <p>Tornado Spark ❌</p>
            <p>Multiplying Spark ❌</p>
            <p>Reversal Spark ❌</p>
            <p>Blast Spark ❌</p>`;
    } else if (type === 'leveling') {
        infoText = 
            `<h1>Onslaught Leveling</h1>
            <p>У этой мантры нет левелинг эффектов</p>`;
    } else if (type === 'effect') { 
        infoText = 
            `<h1>Onslaught Effect</h1>
            <p>??</p>
            <p>??</p>
            <p>??</p>`;
    }
}





  else {
    infoText = `${currentSelection} ${type}`;
  }

  document.getElementById("infoText").innerHTML = `<p>${infoText}</p>`;
  }
//
function toggleContainer(containerId) {
  const container = document.getElementById(containerId);
  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }
}


