let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 3 + 1))
    
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?")

    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
    }
    else if (humanChoice.toLowerCase() === "paper") {
        return "paper"
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        return "scissors"
    }
    else {
        getHumanChoice();
    }
}

function playGame() {
 


    function playRound(humanInput, computerInput) {

        if (humanInput === "rock" && computerInput === "scissors") {
            humanScore++
            return "You win! Rock smashes scissors"
        }
        else if (humanInput === "scissors" && computerInput === "paper") {
            humanScore++
            return "You win! Scissors cuts paper"
        }
        else if (humanInput === "paper" && computerInput === "rock") {
            humanScore++
            return "You win! Paper beats rock"
        }
        else if (humanInput === "scissors" && computerInput === "rock") {
            computerScore++
            return "You lose! Rock smashes scissors"
        }
        else if (humanInput === "rock" && computerInput === "paper") {
            computerScore++
            return "You lose! Paper beats rock"
        }
        else if (humanInput === "paper" && computerInput === "scissors") {
            computerScore++
            return "You lose! Scissors cuts paper"
        }
        else {
            return "It's a draw!"
        }
    }


    
    
    
    
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

  console.log(playRound(humanSelection, computerSelection))


}

let gameNumber = 0;
while (gameNumber < 5) {
    gameNumber++;
    playGame();
    
}

if (gameNumber === 5) {
    if (humanScore > computerScore) {
        console.log("You win with a score of", humanScore)
    }
    else {
        console.log("You lose with a score of", humanScore)
    }
}









