// This is the javascript code for the Rock Paper Scissors Game

// computerPlay will randomly return a string 'rock', 'paper' or 'scissors'
function computerPlay(){
    //Generate a random number between 0 and 3
    let randNumber = Math.random() * 3

    //Use that random number to determine which hand computer plays
    if (randNumber < 1) {
        return 'Rock'
    } else if (randNumber < 2){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

//Playround function takes player selection and computer selection and returns the winner. result returned in String.
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `Its a Tie, both players chose ${playerSelection}`
    } else {
        //if groupings based on computer selection, only 2 options for player
        if (computerSelection.toLowerCase() == 'rock'){
            if (playerSelection.toLowerCase() == 'paper') {
                return `You win, ${playerSelection} beats ${computerSelection}`
            } else {
                return `You lose, ${computerSelection} beats ${playerSelection}`
            }
        }
        //if computer selects paper, player selects rock or scissors
        else if (computerSelection.toLowerCase() == 'paper') {
            if (playerSelection.toLowerCase() == 'scissors'){
                return `You win, ${playerSelection} beats ${computerSelection}`
            } else {
                return `You lose, ${computerSelection} beats ${playerSelection}`
            }
        }
        //computer has selected scissors, so we account for player picking rock or paper
        else if (computerSelection.toLowerCase() == 'scissors') {
            if (playerSelection.toLowerCase() == 'paper'){
                return `You lose, ${computerSelection} beats ${playerSelection}`
            } else {
                return `You win, ${playerSelection} beats ${computerSelection}`
            }
        }
    }
}