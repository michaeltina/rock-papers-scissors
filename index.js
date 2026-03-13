let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice () {
    let hChoice = prompt('Choose between rock, paper and scissors! ');

    console.log(hChoice);
}

function playRound (humanChoice, computerChoice) {

}