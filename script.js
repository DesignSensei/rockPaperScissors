const choices = ['rock', 'paper', 'scissors'];

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const result = document.querySelector('#displayResult');
const finalScore = document.querySelector('#finalScore');
const nameInput = document.querySelector('input');


let playerScore = 0;
let computerScore = 0;

function getInputValue(){
    return nameInput.value.trim();;
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getComputerSelection(){
    const randomInteger = Math.floor(Math.random() * choices.length)
    return choices[randomInteger];
}

function handlePlayerSelection(event){
    const playerSelection = event.target.getAttribute('data-choice');
    const computerSelection = getComputerSelection();

    playRound(playerSelection, computerSelection);
}

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function getWinner(){
    if (playerScore === 5) {
        result.textContent = "🏆 Player wins the game!";
        disableButtons();
    } else if (computerScore === 5){
        result.textContent = "🤖 Computer wins the game!";
        disableButtons();
    }
}

function playRound(playerSelection, computerSelection){
    let resultMessage = '';
    const playerName = (getInputValue() || "Player");

    if (playerSelection === computerSelection){
        resultMessage = `It's a tie! Both ${capitalize(playerName)} and Computer selected the same thing`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    playerScore++;
                    resultMessage = `${capitalize(playerName)} wins! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`
                } else {
                    computerScore++;
                    resultMessage = `Computer wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`
                }

                result.textContent = resultMessage;
                finalScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

                getWinner();
}

rockButton.addEventListener('click', handlePlayerSelection);
paperButton.addEventListener('click', handlePlayerSelection);
scissorsButton.addEventListener('click', handlePlayerSelection);