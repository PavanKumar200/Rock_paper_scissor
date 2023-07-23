const playertext = document.querySelector("#PT");
const computertext = document.querySelector("#CT");
const resulttext = document.querySelector("#RT");

const buttons = document.querySelectorAll(".CB");

let player;
let computer;
let result;


buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();

    playertext.textContent =  player;
    computertext.textContent = computer;
    resulttext.textContent = checkWIN();


}) );

function computerTurn(){
    const ranN = Math.floor(Math.random()*3)+1;

    switch (ranN) {
        case 1:computer = "Rock";
        break;
        case 2 :computer="Paper";
        break;
        case 3 : computer = "Scissor";
        break;    
    }
};

function checkWIN(){
    if(player == computer){
        return " Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper")? "You win!":"You loss!";
    }
    else if(computer == "Paper"){
        return (player == "Scissor")? "You win!":"You loss!";
    }
    else if(computer == "Scissor"){
        return(player == "Rock")? "You win!":"You loss!";
    }
}