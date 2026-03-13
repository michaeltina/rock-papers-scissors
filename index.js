function getComputerChoice (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let choice = getComputerChoice(1, 3)

console.log(choice)