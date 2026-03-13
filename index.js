function getComputerChoice (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let choice = getComputerChoice(1, 3)

if (choice === 1) {
    console.log("rock")
}

else if (choice === 2) {
    console.log('paper')
}

else {
    console.log('scissors')
}

let humanChoice = prompt('Choose between rock, paper and scissors! ')

function getHumanChoice () {
    return choice;
}

console.log(humanChoice)