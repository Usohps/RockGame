const options = ["rock", "paper", "scissor"];
const gameInfo = {
    playerPoints: 0,
    playerOption: undefined,
    computerPoints: 0,
    computerOption: "",
    roundStatus: "",
    turnsLeft: 5,
}

function computerPlay() {
    return options[parseInt(Math.random() * options.length)]
}

function userPlay() {
    return prompt(`Choose any word: ${options.map(options => ` ${options}`)}.\nYou Have: ${gameInfo.turnsLeft + 1} rounds left`).toLowerCase()
}

function gameRound() {
    if (gameInfo.playerOption === gameInfo.computerOption) {
        return "It is a Draw";
    } else if (gameInfo.playerOption === "rock") {
        return (gameInfo.computerOption === "paper") ? "Anonymous win!" : "Player win!"
    } else if (gameInfo.playerOption === "paper") {
        return (gameInfo.computerOption === "scissor") ? "Anonymous win!" : "Player win!"
    } else if (gameInfo.playerOption === "scissor") {
        return (gameInfo.computerOption === "rock") ? "Anonymous win!" : "Player win!"
    }else{
        gameInfo.turnsLeft = gameInfo.turnsLeft + 1
        return gameInfo.roundStatus = "Please input a valid option."
    }
}

function calcPoints() {
    if (gameInfo.roundStatus == "Player win!") {
        return gameInfo.playerPoints++;
    } else if (gameInfo.roundStatus == "Anonymous win!") {
        return gameInfo.computerPoints++;
    }
}

function startGame() {
    for (let chance = gameInfo.turnsLeft; chance > 0; chance--) {
        gameInfo.turnsLeft--;
        gameInfo.playerOption = userPlay();
        gameInfo.computerOption = computerPlay();
        gameInfo.roundStatus = gameRound();
        calcPoints();
        console.table(gameInfo);
    }
    if (gameInfo.playerPoints > gameInfo.computerPoints) {
        return `Game Over, Player wins with ${gameInfo.playerPoints} point's`
    } else if (gameInfo.playerPoints < gameInfo.computerPoints) {
        return `Sadly Anonymous wins with ${gameInfo.computerPoints} point's`
    }
}
console.log(startGame());