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
