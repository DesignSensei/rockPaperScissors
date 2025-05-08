let choices = ["rock", "paper", "scissors"];

let validChoices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get a player's choice
function getHumanChoice() {
    let humanInput = prompt("Enter your choice (rock, paper, or scissors):");
        
    while (!validChoices.includes(humanInput.toLowerCase())) {
        humanInput = prompt("Invalid choice!. Please enter your choice (rock, paper, or scissors):");
    }

    return humanInput.toLowerCase();
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        alert(`It is a tie! You both chose ${humanChoice}`);

    } else if ((humanChoice === "rock" && computerChoice === "scissors")||
              (humanChoice === "scissors" && computerChoice === "paper") ||(humanChoice === "paper" && computerChoice === "rock")) {   
                humanScore++;
                alert(`Human wins! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}!`);      
    } else {
        computerScore++;
        alert(`Computer wins! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}!`)
    } 

    alert(`Score: You: ${humanScore}, Computer score: ${computerScore}`);

}

function getWinner() {
    if (humanScore > computerScore) {
        alert(`The Human has won! Scores: ${humanScore}, Computer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`The Computer has won! Scores: ${humanScore}, Computer score: ${computerScore}`); 
    } else {
        alert(`It is a TIE! Scores: ${humanScore}, Computer score: ${computerScore}`)
    }
}

function playGame() {

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice)
    }
    
    getWinner();
    
}

// Start the game
playGame();