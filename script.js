let currentSelection = ""; // в пустой залупке хранится выбранный элемент

function handleItemClick(itemName) {
    currentSelection = itemName; 
    let infoText = '';   // тут текст хранится

     // Flamecharm
     if (itemName === 'Fire Blade') {
        infoText = 'Это мантра Fire Blade';
    } else if (itemName === 'Flame Repulsion') {
        infoText = 'Это мантра Flame Repulsion';
    } else if (itemName === 'Burning Servants') {
        infoText = 'Это мантра Burning Servants';
    } else if (itemName === 'Flame Grab') {
        infoText = 'Это мантра Flame Grab';
    } else if (itemName === 'Flame Blind') {
        infoText = 'Это мантра Flame Blind';    
    } else if (itemName === 'Fire Palm') {
        infoText = 'Это мантра Fire Palm';
    } else if (itemName === 'Fire Eruption') {
        infoText = 'Это мантра Fire Eruption';
    } else if (itemName === 'Fire Forge') {
        infoText = 'Это мантра Fire Forge';
    } else if (itemName === 'Relentless Flames') {
        infoText = 'Это мантра Relentless Flames';
    } else if (itemName === 'Flame Sentinel') {
        infoText = 'Это мантра Flame Sentinel';
    } else if (itemName === 'Rising Flame') {
        infoText = 'Это мантра Rising Flame';
    } else if (itemName === 'Ash Slam') {
        infoText = 'Это мантра Ash Slam';
    } else if (itemName === 'Flame Ballista') {
        infoText = 'Это мантра Flame Ballista';
    } else if (itemName === 'Flaming Scourge') {
        infoText = 'Это мантра Flaming Scourge';
    } else if (itemName === 'Flame Leap') {
        infoText = 'Это мантра Flame Leap';
    } else if (itemName === 'Flame Assault') {
        infoText = 'Это мантра Flame Assault';
    } else if (itemName === 'Flame Wisp') {
        infoText = 'Это мантра Flame Wisp';
    } else if (itemName === 'Graceful Flame') {
        infoText = 'Это мантра Graceful Flame';
    } else if (itemName === 'Flame of Denial') {
        infoText = 'Это мантра Flame of Denial';
    }

    // Thundercall
    else if (itemName === 'Lightning Blade') {
        infoText = 'Это мантра Lightning Blade';
    } else if (itemName === 'Jolt Grab') {
        infoText = 'Это мантра Jolt Grab';
    } else if (itemName === 'Lightning Beam') {
        infoText = 'Это мантра Lightning Beam';
    } else if (itemName === 'Electro Carve') {
        infoText = 'Это мантра Electro Carve';
    } else if (itemName === 'Fleeting Sparks') {
        infoText = 'Это мантра Fleeting Sparks';
    } else if (itemName === 'Lightning Impact') {
        infoText = 'Это мантра Lightning Impact';
    } else if (itemName === 'Lightning Clones') {
        infoText = 'Это мантра Lightning Clones';
    } else if (itemName === 'Lightning Strike') {
        infoText = 'Это мантра Lightning Strike';
    } else if (itemName === 'Thunder Kick') {
        infoText = 'Это мантра Thunder Kick';
    } else if (itemName === 'Storm Blades') {
        infoText = 'Это мантра Storm Blades';
    } else if (itemName === 'Grand Javelin') {
        infoText = 'Это мантра Grand Javelin';
    } else if (itemName === 'Bolt Piercer') {
        infoText = 'Это мантра Bolt Piercer';
    } else if (itemName === 'Emotion Wave') {
        infoText = 'Это мантра Emotion Wave';
    } else if (itemName === 'Lightning Stream') {
        infoText = 'Это мантра Lightning Stream';
    } else if (itemName === 'Thunder Wisp') {
        infoText = 'Это мантра Thunder Wisp';
    } else if (itemName === 'Spark Swap') {
        infoText = 'Это мантра Spark Swap';
    } else if (itemName === 'Lightning Assault') {
        infoText = 'Это мантра Lightning Assault';
    } else if (itemName === 'Lightning Cloak') {
        infoText = 'Это мантра Lightning Cloak';
    }

     // Frostdraw
     else if (itemName === 'Ice Spikes') {
        infoText = 'Это мантра Ice Spikes';
    } else if (itemName === 'Ice Beam') {
        infoText = 'Это мантра Ice Beam';
    } else if (itemName === 'Warden\'s Blades') {
        infoText = 'Это мантра Warden\'s Blades';
    } else if (itemName === 'Frozen Servants') {
        infoText = 'Это мантра Frozen Servants';
    } else if (itemName === 'Ice Daggers★') {
        infoText = 'Это мантра Ice Daggers★';  
    } else if (itemName === 'Ice Blade★') {
        infoText = 'Это мантра Ice Blade★';
    } else if (itemName === 'Ice Chain★') {
        infoText = 'Это мантра Ice Chain★';
    } else if (itemName === 'Ice Eruption★') {
        infoText = 'Это мантра Ice Eruption★';
    } else if (itemName === 'Ice Forge★') {
        infoText = 'Это мантра Ice Forge★';
    } else if (itemName === 'Ice Smash★') {
        infoText = 'Это мантра Ice Smash★';
    } else if (itemName === 'Ice Lance★★') {
        infoText = 'Это мантра Ice Lance★★';
    } else if (itemName === 'Rising Frost★★') {
        infoText = 'Это мантра Rising Frost★★';
    } else if (itemName === 'Ice Flock★★') {
        infoText = 'Это мантра Ice Flock★★';
    } else if (itemName === 'Ice Carve★★') {
        infoText = 'Это мантра Ice Carve★★';
    } else if (itemName === 'Frost Grab★★') {
        infoText = 'Это мантра Frost Grab★★';
    } else if (itemName === 'Ice Cubes★★★') {
        infoText = 'Это мантра Ice Cubes★★★';
    } else if (itemName === 'Ice Fissure★★★') {
        infoText = 'Это мантра Ice Fissure★★★';
    } else if (itemName === 'Glacial Arc★') {
        infoText = 'Это мантра Glacial Arc★';
    } else if (itemName === 'Ice Skate★★★') {
        infoText = 'Это мантра Ice Skate★★★';
    } else if (itemName === 'Frost Wisp★★') {
        infoText = 'Это мантра Frost Wisp★★';
    } else if (itemName === 'Iceberg★★★') {
        infoText = 'Это мантра Iceberg★★★';
    }

    // Galebreath
    else if (itemName === 'Wind Blade') {
        infoText = 'Это мантра Wind Blade';
    } else if (itemName === 'Tornado Kick') {
        infoText = 'Это мантра Tornado Kick';
    }else if (itemName === 'Air Force') {
            infoText = 'Это мантра Air force';
    } else if (itemName === 'Gale Lunge★') {
        infoText = 'Это мантра Gale Lunge★';
    } else if (itemName === 'Tornado★') {
        infoText = 'Это мантра Tornado★';
    } else if (itemName === 'Heavenly Wind★') {
        infoText = 'Это мантра Heavenly Wind★';
    } else if (itemName === 'Galetrap★') {
        infoText = 'Это мантра Galetrap★';
    } else if (itemName === 'Gale Punch★') {
        infoText = 'Это мантра Gale Punch★';
    } else if (itemName === 'Wind Forge★') {
        infoText = 'Это мантра Wind Forge★';
    } else if (itemName === 'Twister Kicks★') {
        infoText = 'Это мантра Twister Kicks★';
    } else if (itemName === 'Champion\'s Whirlthrow★★') {
        infoText = 'Это мантра Champion\'s Whirlthrow★★';
    } else if (itemName === 'Rising Wind★★') {
        infoText = 'Это мантра Rising Wind★★';
    } else if (itemName === 'Wind Gun★★') {
        infoText = 'Это мантра Wind Gun★★';
    } else if (itemName === 'Wind Carve★★') {
        infoText = 'Это мантра Wind Carve★★';
    } else if (itemName === 'Astral Wind★★★') {
        infoText = 'Это мантра Astral Wind★★★';
    } else if (itemName === 'Pillars of Erisia★★★') {
        infoText = 'Это мантра Pillars of Erisia★★★';
    } else if (itemName === 'Wind Passage★★★') {
        infoText = 'Это мантра Wind Passage★★★';
    } else if (itemName === 'Gale Wisp★★') {
        infoText = 'Это мантра Gale Wisp★★';
    }

     // Shadowcast
     else if (itemName === 'Dark Blade') {
        infoText = 'Это мантра Dark Blade';
    } else if (itemName === 'Shadow Gun') {
        infoText = 'Это мантра Shadow Gun';
    }else if (itemName === 'Clutching Shadows') {
        infoText = 'Это мантра Clutching Shadows';
    } else if (itemName === 'Shadow Eruption') {
        infoText = 'Это мантра Shadow Eruption';
    }else if (itemName === 'Dark Blade') {
        infoText = 'Это мантра Dark Blade';
    } else if (itemName === 'Rising Shadow') {
        infoText = 'Это мантра Rising Shadow';
    } else if (itemName === 'Shadow Seekers') {
        infoText = 'Это мантра Shadow Seekers★';
    } else if (itemName === 'Shadow Meteor') {
        infoText = 'Это мантра Shadow Meteor★';
    } else if (itemName === 'Shadow Burst') {
        infoText = 'Это мантра Shadow Burst★';
    } else if (itemName === 'Shadow Chains') {
        infoText = 'Это мантра Shadow Chains★';
    } else if (itemName === 'Shadowforge') {
        infoText = 'Это мантра Shadowforge★';
    } else if (itemName === 'Shadow Assault') {
        infoText = 'Это мантра Shadow Assault★★';
    } else if (itemName === 'Shadow Roar') {
        infoText = 'Это мантра Shadow Roar★★';
    } else if (itemName === 'Shade Wisp') {
        infoText = 'Это мантра Shade Wisp★★';
    } else if (itemName === 'Encircle') {
        infoText = 'Это мантра Encircle★';
    }else if (itemName === 'Dark Blade') {
        infoText = 'Это мантра Dark Blade';
    }else if (itemName === 'Devouring eye') {
        infoText = 'Это мантра Devouring eye★★';
    }else if (itemName === 'Eclipse kick') {
        infoText = 'Это мантра Eclipse kick★★★';
    }else if (itemName === 'Shade Bringer') {
        infoText = 'Это мантра Shade Bringer★★★';
    }else if (itemName === 'Shadow Vortex') {
        infoText = 'Это мантра Shadow Vortex★★★';
    }else if (itemName === 'Shade Devour') {
        infoText = 'Это мантра Shadow Shade Devour★';
    }

    // Ironsing
    else if (itemName === 'Metal Eruption') {
        infoText = 'Это мантра Metal Eruption';
    } else if (itemName === 'Needle Barrage') {
        infoText = 'Это мантра Needle Barrage';
    } else if (itemName === 'Metal Rampart') {
        infoText = 'Это мантра Metal Rampart';
    } else if (itemName === 'Metal Kick') {
        infoText = 'Это мантра Metal Kick';
    } else if (itemName === 'Iron Skin') {
        infoText = 'Это мантра Iron Skin';
    } else if (itemName === 'Chain Pull') {
        infoText = 'Это мантра Chain Pull';
    } else if (itemName === 'Metal Rain') {
        infoText = 'Это мантра Metal Rain';
    } else if (itemName === 'Caltrops') {
        infoText = 'Это мантра Caltrops';
    } else if (itemName === 'Firing Line') {
        infoText = 'Это мантра Firing Line';
    } else if (itemName === 'Metal Fakeout') {
        infoText = 'Это мантра Metal Fakeout';
    }else if (itemName === 'Metal Fakeout') {
        infoText = 'Это мантра Oxidizing Rush';
    }else if (itemName === 'Oxidizing Rush') {
        infoText = 'Это мантра Metal Ball';
    }else if (itemName === 'Metal Ball') {
        infoText = 'Это мантра Metal Fakeout';
    }else if (itemName === 'Metal Wisp') {
        infoText = 'Это мантра Metal Wisp';
    }else if (itemName === 'Metal Armament') {
        infoText = 'Это мантра Metal Armament';
    }else if (itemName === 'Metal Gatling') {
        infoText = 'Это мантра Metal Gatling';
    }else if (itemName === 'Iron Slam') {
        infoText = 'Это мантра Iron Slam';
    }else if (itemName === 'Iron Hug') {
        infoText = 'Это мантра Iron Hug';
    }else if (itemName === 'Rocket Lance') {
        infoText = 'Это мантра Rocket Lance';
    }
// Metal Eruption
// Needle Barrage
// Metal Rampart
// Metal Kick
// Iron Skin
// Chain Pull
// Metal Rain
// Caltrops
// Firing Line
// Metal Fakeout
// Oxidizing Rush
// Metal Ball
// Metal Wisp
// Metal Armament
// Metal Gatling
// Iron Slam
// Iron Hug
// Rocket Lance

    document.getElementById('infoText').innerHTML = `<p>${infoText}. Выберите направление.</p>`;
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
                <h1>Flame Ballista Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ✅</p>
            `;
        } else if (type === 'leveling') {
            infoText = `
                <h1>Flame BallistaLeveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>
            `;
        } else if (type === 'effect') { 
            infoText = `
                <h1>Flame Ballista Effect</h1>
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Jolt Grab Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Jolt Grab Effect</h1>
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Thunder Kick Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Bolt Piercer Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Bolt Piercer Effect</h1>
                <p>Multiplying Spark: Allows you to shoot bolts instead of arrows</p>
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Grand Javelin Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Grand Javelin Effect</h1>
                <p>Cloud and Stratus Stones: Increases the range of the javelin</p>
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Glass and Magnifying Stones: Increases the range of the blades</p>
                <p>Vibrant Gem: Increases the damage of the blades</p>`
            ;
        }
    }
    else if (currentSelection === 'Fleeting Sparks') {
        if (type === 'mod') {
            infoText = 
                `<h1>Fleeting Spark Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ✅</p>
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Fleeting Spark Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Fleeting Spark Effect</h1>
                <p>Cloud and Stratus Stones: Increases the range and speed of the attack</p>
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
    else if (currentSelection === 'Spark Swap') {
        if (type === 'mod') {
            infoText = 
                `<h1>Spark Swap Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ❌ </p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Spark Swap Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Spark Swap Effect</h1>
                <p>Cloud and Stratus Stones: Possibly increases range, needs testing</p>
                <p>Aeon and Eternal Logstones: ?</p>
                <p>Multiplying Spark: Significantly reduces cooldown and range, also gives an audio cue for when you swap. BOOGIE WOOGIE!</p>`
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
                <p>Vibrant Gem ❌</p>`
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
//spark swap
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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

    else if (currentSelection === 'Ice Wall') {
        if (type === 'mod') {
            infoText = 
                `<h1>Ice Wall Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ✅</p>
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Wall Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
               `<h1>Ice Wall Effect</h1>
                <p>Drift and Rush Shards: Increases the width of the wall</p>
                <p>Aeon and Eternal Logstones: Increases the height and width of the wall</p>
                <p>Glass and Magnifying Stones: Increases the width of the wall</p>
                <p>Vibrant Gem: Increases the health of the wall</p>`
            ;
        }
    }

    else if (currentSelection === 'Ice Spike') {
        if (type === 'mod') {
            infoText = 
                `<h1>Ice Spike Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ✅</p>
                <p>Vibrant Gem ✅</p>`
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
    
    else if (currentSelection === 'Ice Spikes') {
        if (type === 'mod') {
            infoText = 
                `<h1>Ice Spike Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ✅</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ✅</p>
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Reversal Spark: Makes the servants aim outwards instead of inwards</p>
                <p>Blast Spark: Gives you one BIG BOY instead of a bunch of mini servants</p>`
            ;
        }
    }
    
    else if (currentSelection === 'Ice Beam') {
        if (type === 'mod') {
            infoText = 
                `<h1>Ice Beam Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Beam Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Beam Effect</h1>
                <p>Cloud and Stratus Stones: Makes the beam and its hitbox larger</p>
                <p>Aeon and Eternal Logstones: ?</p>
                <p>Talent Preceding Chill: Landing ice beam freezes your opponent</p>`
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
                <p>Vibrant Gem ❌</p>`
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
    
    else if (currentSelection === 'Ice Spikes') {
        if (type === 'mod') {
            infoText = 
                `<h1>Ice Spikes Modification</h1>
                <p>Cloud Stone/Stratus Stone ✅</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ❌</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Spikes Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Spikes Effect</h1>
                <p>Cloud and Stratus Stones: Makes ice spikes and their hitbox larger</p>
                <p>Talent Spike Traps: Pressing F during windup turns your spikes into spike traps</p>`
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
                <p>Vibrant Gem ❌</p>`
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
    
    else if (currentSelection === 'Ice Blade★') {
        if (type === 'mod') {
            infoText = 
                `<h1>Ice Blade Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Blade Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Blade Effect</h1>
                <p>Aeon and Eternal Logstones: ?</p>
                <p>Crystal and Perfect Lens: ?</p>
                <p>Talent Glacial Mobility: Slide casting ice blades causes an aerial ice blade attack instead of normal</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ❌</p>`
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
    
    else if (currentSelection === 'Crystal Impale★★') {
        if (type === 'mod') {
            infoText = 
                `<h1>Crystal Impale Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Crystal Impale Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Crystal Impale Effect</h1>
                <p>Aeon and Eternal Logstones: ?</p>
                <p>Crystal and Perfect Lens: Increases range of crystal impale</p>`
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
                <p>Vibrant Gem ❌</p>`
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
    
    else if (currentSelection === 'Glacial Finish') {
        if (type === 'mod') {
            infoText = 
                `<h1>Glacial Finish Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ✅</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Glacial Finish Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Glacial Finish Effect</h1>
                <p>Aeon and Eternal Logstones: ?</p>
                <p>Crystal and Perfect Lens: Increases range of glacial finish</p>
                <p>Talent Glacial Mobility: Slide casting Glacial finish causes an aerial ice blade attack instead of normal</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Frost Wisp Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice SkateLeveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Cubes Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Cubes Effect</h1>
                <p>нету</p>
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Carve Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Carve Effect</h1>
                <p>Cloud and Stratus Stones: Makes the carve bigger</p>
                <p>Crystal and Perfect Lens: Makes the range you hold it out from your character longer</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Carve Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Carve Effect</h1>
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Ice Smash Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Ice Smash Effect</h1>
                <p>Cloud and Stratus Stones: Makes the Glaive bigger</p>
                <p>нету ?</p>`

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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Wind Blade Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Air Force Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Air Force Effect</h1>
                <p>Cloud and Stratus Stones: Makes the blast larger</p>
                <p>Crystal and Perfect Lens: Makes the blast longer</p>
                <p>Reversal Spark: Instead of pushing people away, it pulls people to you if it hits</p>
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Gale Lunge Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Tornado Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Gale Punch Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Wind Forge Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Wind Forge Effect</h1>
                <p>Crystal and Perfect Lens: Increases range to begin the wind forge (+ distance of lockon)</p>
                <p>Multiplying Spark: Splits the wind forges into multiple lock-on projectile</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Champion's Whirlthrow Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Multiplying Spark: Turns the Wind Gun into 4 slightly spread long range bullets</p>
                <p>Blast AND Magnifying Spark: Turns the Wind Gun into 3 bursts of short range 'wind shotguns'</p>
                <p>Blast Spark: Turns the Wind Gun into a 'wind shotgun', shorter ranged but a lot more bullets</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Astral Wind Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Tornado Spark: Adds a spinning slash at the end of the mantra</p>
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Shadow Gun Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Shadow Gun</h1>
                <p>Cloud and Stratus Stones: Makes the Shadow Gun wider</p>
                <p>Crystal or Perfect Lens: Makes the Shadow Gun longer</p>
                <p>Blast Spark: Turns the single blast Shadow Gun into multiple blasts of the Shadow Gun that hits multiple times</p>
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Clutching Shadow Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Shadow Chains Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Encircle Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Blast Spark: Blast radius increases drastically, also guardbreaks</p>
                <p>Multiplying Spark: Blasts increase from 1 to 3, with the third knocking your opponent back</p>
                <p>Blast and Multiplying Spark: The 3 blasts from multiplying dramatically gain size, and the blasts guardbreak</p>
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Blast Spark: The 'Rising Shadow tendril' will no longer make opponents rise up, but instead, will keep the tendril on them. If the opponent with the tendril on them tries to cast a mantra, a portion of of ether will be returned to you.</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ❌</p>`
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Blast Spark: Unleashes a rapid flurry of attacks on those hit if your HP is below 40%</p>`
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
                <p>Vibrant Gem ❌</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Eclipse Kick Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Eclipse Kick</h1>
                <p>Crystal and Perfect Lens: Makes the Shadow Assault go further</p>
                <p>Glass and Magnifying Stones: Makes the hitbox of Shadow Assault larger and possibly makes it go further but needs testing</p>
                <p>Vibrant Gems: ?</p>
                <p>Blast Spark: Unleashes a rapid flurry of attacks on those hit if your HP is below 40%</p>`
        }
    }
    else if (currentSelection === 'Eclipse Kick') {
        if (type === 'mod') {
            infoText = 
                `<h1>Eclipse Kick Modification</h1>
                <p>Cloud Stone/Stratus Stone ❌</p>
                <p>Drift Shard/Rush Shard ❌</p>
                <p>Aeon Logstone/Eternal Logstone ❌</p>
                <p>Crystal Lens/Perfect Lens ✅</p>
                <p>Glass Stone/Magnifying Stone ❌</p>  
                <p>Vibrant Gem ✅</p>`
            ;
        } else if (type === 'leveling') {
            infoText = 
                `<h1>Eclipse Kick Leveling</h1>
                <p>У этой мантры нет левелинг эффектов</p>`
            ;
        } else if (type === 'effect') { 
            infoText = 
                `<h1>Eclipse Kick</h1>
                <p>Crystal and Perfect Lens: ?</p>
                <p>Vibrant Gems: ?</p>
                <p>Multiplying Spark: Eclipse Kick's windup will be a lot faster, and the animation changes. It will now perform a kick that dazes even if blocked or dodged. If this modified Eclipse Kick lands, you can cast it again to perform the regular Eclipse Kick.</p>`
        }
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
                <p>Vibrant Gem ✅</p>`
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
                <p>Multiplying Spark: Will make Shadebringer do 2 more swings after the first swing</p>
                <p>Spring AND Multiplying Spark: Makes you do the flip attack first, then the two slashes</p>
                <p>Spring Spark: Will make Shadebringer to make you jump up and then slam back down with the 'Shadebringer sword'</p>`
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
                <p>Vibrant Gem ✅</p>`
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

// Metal Eruption
// Needle Barrage
// Metal Rampart
// Metal Kick
// Iron Skin
// Chain Pull
// Metal Rain
// Caltrops
// Firing Line
// Metal Fakeout
// Oxidizing Rush
// Metal Ball
// Metal Wisp
// Metal Armament
// Metal Gatling
// Iron Slam
// Iron Hug
// Rocket Lance

    
    
    
    
    else {
        infoText = `${currentSelection} ${type}`;
    }

    document.getElementById('infoText').innerHTML = `<p>${infoText}</p>`;
}
//  
function toggleContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
    } else {
        container.classList.add('hidden');
    }
}
