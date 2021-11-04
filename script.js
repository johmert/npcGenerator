let display = document.getElementById('character')
let bought = document.getElementById('character2');
let rollButton = document.getElementById('roll');
let buyButton = document.getElementById('buy');

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

const characterText = character => {
    let result = '';
    for(const [key, value] of Object.entries(character)){
        result += key + ": " + value + "<br>";
    }
    return result;
}

const displayCharacter = () => {
    display.style.border = '2px solid green';
    display.style.color = 'green';
    display.innerHTML = characterText(rolledCharacter());
}

rollButton.addEventListener('click', displayCharacter);

const randomNum = () => {
    return Math.floor(Math.random() * 7)
}

const purchaseStatsCharacter = () => {
    let points = 25;
    let costs = [8, 9, 10, 11, 12, 13, 14, 15];
    let stats = [0, 0, 0, 0, 0, 0];
    let random = randomNum();
    // go through the stats array
    // if no value, randomly select a cost
    // subtract it's placement (in costs) number from "points" (this is the 'purchasing' of the skill)
    // can only make "purchase" if there are enough points 
    // (ex: if points = 5, stats[x] cannot equal costs[6] or costs[7])
    // this randomizes a process suggested in the PHB pg 13
    while(points > 0){
        for(let i=0; i<stats.length; i++){
            if((points - random) >= 0){
                stats[i] = costs[random];      
                points -= random;
            }
            random = randomNum(); 
        }
    }
    return character(stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]);
}


const boughtCharacter = () => {
    bought.style.border = '2px solid darkred';
    bought.style.color = 'darkred';
    bought.innerHTML = characterText(purchaseStatsCharacter());
}

buyButton.addEventListener('click', boughtCharacter);
