
let userScore = 0
let compScore = 0
let numberOfDraws = 0
const userSelDiv = document.querySelector('.user-selection')
const compSelDiv = document.querySelector('.comp-selection')
const userScoreDiv = document.querySelector('.user-score')
const compScoreDiv = document.querySelector('.comp-score')
const draw = document.querySelector('.draw')
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


rock.addEventListener('click', () => playOneRound("rock", getComputerChoice()))
paper.addEventListener('click', () => playOneRound("paper", getComputerChoice()))
scissors.addEventListener('click', () => playOneRound("scissors", getComputerChoice()))



//make a function that will randomly return rock paper or scissors
function getComputerChoice() {
    //get an integer 1-3 randomly
    let num = Math.floor(Math.random()*3+1);
    //assign rock paper scissors to 1-3
    let rps
    if (num === 1) {
        rpsComp = "rock"
    } else if (num === 2){
        rpsComp = "paper"
    } else {
        rpsComp = "scissors"
    }
    return rpsComp
}   

function playOneRound(rpsUser,computerSelection) {
    //compare user and computer selection to determine winner
    
    if (rpsUser === computerSelection) {
        draw.textContent = "Draws: " + ++numberOfDraws
    } else if (rpsUser === "scissors" && computerSelection === "paper" || rpsUser === "paper" && computerSelection === "rock" || rpsUser === "rock" && computerSelection === "scissors") {
        userScoreDiv.textContent = "User: " + ++userScore
    } else {
        compScoreDiv.textContent = "Computer: " + ++compScore
    }
    
}

userScoreDiv.textContent = "User: " + userScore
compScoreDiv.textContent = "Computer: " + compScore
draw.textContent = "Draws: " + numberOfDraws


// function game() {
//     //starting score
//     let userScore = 0
//     let compScore = 0
//     //play five rounds
//     for (let i = 0; i < 5; i++) {
//         //run playOneRound 
//         let winner = playOneRound()
        
//         if (winner === "user") {
//             userScore = ++userScore
//         } else if (winner === "comp") {
//             compScore = ++compScore
//         } else {}
//         //increment whoever won
//         console.log(`User: ${userScore} Computer: ${compScore}`)
//         //show score after this round
//     }
//     //if to declare when a winner reaches 5 points
//     if (userScore > compScore) {
//         return "You won!"
//     } else if (userScore === compScore) {
//         return "It's a draw!"
//     } else {
//         return "You lost! Womp, Womp"
//     }
// }

