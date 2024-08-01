'use server';
const fighter = ["Iceborn Gauntlet", "Wit's End", "Eclipse", "Chempunk Chainsword", "Manamune", "Dead Man's Plate", "Terminus", "Experimental Hexplate", "Hullbreaker", "Black Cleaver", "Maw of Malmortius", "Spear of Shojin", "Sundered Sky", "Blade of The Ruined King", "Death's Dance", "Guardian Angel", "Sterak's Gage", "Stridebreaker", "Ravenous Hydra", "Titanic Hydra", "Overlord's Bloodmail", "Trinity Force"];
const marksman = ["Phantom Dancer", "Runaan's Hurricane", "Navori Flickerblade", "Rapid Firecannon", "Wit's End", "Manamune", "Statikk Shiv", "Nashor's Tooth", "Guinsoo's Rageblade", "Immortal Shieldbow", "Lord Dominik's Regards", "Mortal Reminder", "Terminus", "Kraken Slayer", "Maw of Malmortius", "The Collector", "Essence Reaver", "Yun Tal Wildarrows", "Blade of The Ruined King", "Guardian Angel", "Mercurial Scimitar", "Infinity Edge", "Bloodthirster"];
const assasin = ["Serpent's Fang", "Umbral Glaive", "Youmuu's Ghostblade", "Opportunity", "Edge of Night", "Chempunk Chainsword", "Manamune", "Voltaic Cyclosword", "Hubris", "Axiom Arc", "Maw of Malmortius", "The Collector", "Serylda's Grudge", "Guardian Angel", "Profane Hydra"];
const mage = ["Mejai's Soulstealer", "Morellonomicon", "Rod of Ages", "Rylai's Crystal Scepter", "Hextech Rocketbelt", "Malignance", "Horizon Focus", "Blackfire Torch", "Cryptbloom", "Luden's Companion", "Archangel's Staff", "Stormsurge", "Nashor's Tooth", "Liandry's Torment", "Cosmic Drive", "Void Staff", "Banshee's Veil", "Lich Bane", "Riftmaker", "Shadowflame", "Zhonya's Hourglass", "Rabadon's Deathcap"];
const tank = ["Locket of the Iron Solari", "Zeke's Convergence", "Knight's Vow", "Abyssal Mask", "Winter's Approach", "Frozen Heart", "Trailblazer", "Iceborn Gauntlet", "Sunfire Aegis", "Randuin's Omen", "Thornmail", "Hollow Radiance", "Unending Despair", "Force of Nature", "Spirit Visage", "Kaenic Rookern", "Dead Man's Plate", "Heartsteel", "Warmog's Armor", "Jak'Sho, The Protean", "Titanic Hydra", "Overlord's Bloodmail"];
const antiHeal = ["Morellonomicon", "Mortal Reminder", "Thornmail"];
const antiHealAD = ["Thornmail", "Mortal Reminder"];
const antiHealAP = ["Morellonomicon"];
const dmgHeal = ["Bloodthirster", "Blade of The Ruined King", "Immortal Shieldbow", "Goredrinker"];
const passiveHeal = ["Warmog's Armor", "Hollow Radiance"];
const healingChamps = ["Warwick", "Aatrox", "Sylas", "Illaoi", "Bel'Veth", "Cho'Gath", "DrMundo", "Gnar", "Lulu", "Mordekaiser", "Shyvana", "Renekton", "Volibear", "Vladimir", "Swain", "Sion", "Ornn", "Nasus", "Kled", "Kayn"];

export const getBuild = async (enemyItems: Array<string>, userItems: Array<string>, userChamp :string, enemyChamp: string, metricAPorAD: number) => {
    // If it's full don't return new items
    if (userItems.length > 5)
        return new Array<string>;
    // Variables to make it more accurate
    var needsAntiHeal = false;
    var needsHeal = false;
    var outputItems = new Array<string>;
    var prefType = "";
    // Check incase user has preferenes
    if (metricAPorAD < 40) {
        prefType = "AP";
    } else if (metricAPorAD > 60) {
        prefType = "AD";
    } else {
        prefType = ["AD", "MR", "AS", "TN", "AP"][Math.floor(Math.random() * 5)];
    }
    // Check if user will need Antiheal
    if (healingChamps.includes(enemyChamp) || dmgHeal.some(it => enemyItems.includes(it)))
        needsAntiHeal = true;
    // Add correct antiheal item
    if (!userItems.some(it => antiHeal.includes(it))) {
        if (prefType === "AP")
            outputItems.push(pickRandomItem(antiHealAP));
        else if (prefType === "AD")
            outputItems.push(pickRandomItem(antiHealAD));
    }
    // If users inventory is full go back
    if (userItems.length + outputItems.length >= 6)
        return outputItems;
    // If user needs healing items
    if (healingChamps.includes(userChamp) || !dmgHeal.some(it => userItems.includes(it)))
        needsHeal = true;
    // Add correct healing item
    if (!userItems.some(it => antiHeal.includes(it))) {
        if (prefType === "AP")
            outputItems.push(pickRandomItem(passiveHeal));
        else if (prefType === "AD")
            outputItems.push(pickRandomItem(dmgHeal));
    }
    // If users inv is full return
    if (userItems.length + outputItems.length >= 6)
        return outputItems;
    // Add other items // for now to just simplify it
    for (var i = 0; i < 9 - (userItems.length + outputItems.length); i++) {
        if (prefType === "AP") {
            outputItems.push(pickNewItem(mage, outputItems));
        } else if (prefType === "AD") {
            outputItems.push(pickNewItem(fighter, outputItems));
        } else if (prefType === "MR") {
            outputItems.push(pickNewItem(marksman, outputItems));
        } else if (prefType === "AS") {
            outputItems.push(pickNewItem(assasin, outputItems));
        } else if (prefType === "TN") {
            outputItems.push(pickNewItem(tank, outputItems));
        }
    }
    // Return all items
    return outputItems;
}

const pickRandomItem = (itemList: Array<string>) => {
    // return any item
    return itemList[Math.floor(Math.random() * itemList.length)];
}

const pickNewItem = (itemList: Array<string>, inv: Array<string>) => {
    // Return but don't dupe it
    var wantedItem = itemList[Math.floor(Math.random() * itemList.length)];
    while (inv.includes(wantedItem)) {
        wantedItem = itemList[Math.floor(Math.random() * itemList.length)];
    }
    return wantedItem;
}