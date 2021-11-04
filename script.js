const character = (str, dex, con, int, wis, cha) => {
    return {
        strength: str,
        dexterity: dex,
        constitution: con,
        intelligence: int,
        wisdom: wis,
        charisma: cha
    }
}

const rolledStat = () => {
    let diceRoll = Math.ceil(Math.random()*18);
    return diceRoll;
}

const rolledCharacter = () => {
    let result = character(rolledStat(), rolledStat(), rolledStat(), rolledStat(), rolledStat(), rolledStat());
    return result;
}


const displayCharacter = (character) => {
    let result = '';
    for(const [key, value] of Object.entries(character)){
        result += key + ": " + value + "<br>";
    }
    return result;
}

let display = document.getElementById('character');

display.innerHTML = displayCharacter(rolledCharacter());