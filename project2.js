
// initialising the score to 0
let userScore=0;
let compScore=0;

//accessing id and class
const  choices=document.querySelectorAll(".choice");
const  message=document.querySelector(" #message");
const  userScorePara=document.querySelector("#user-score");
const  compScorePara=document.querySelector("#comp-score");



// FINAL RESULT-showing winner
const  showWinner=(userWin,userChoice,compChoice) =>{
 
     if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        message.innerText=`You win !.Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
     }
     else{

        console.log("you lose !");
        compScore++;
        compScorePara.innerText=compScore;
        message.innerText=`You lose !.${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
     }

}
// DRAW FUNCTION
const drawGame=() =>{

    console.log("Game was draw !");
    message.innerText="Game was draw.Play again !";
    message.style.backgroundColor= "#081b31";
}


// Game logic starts here
const playGame=(userChoice) =>{
 
    console.log("userchoice :", userChoice);
    
    const compChoice=getCompChoices();

    console.log("compchoice :", compChoice);
   
    // when draw occurs
    if(userChoice === compChoice){

      drawGame();

    }
    else{

        let userWin=true;
        if(userChoice==="rock"){
            //scissors and paper is  reaming option
           userWin= compChoice==="paper"? false:true;

        }
        else if(userChoice=== "paper"){
            // rock and scissor is remaining option
            userWin= compChoice==="scissors"? false:true;

        }

        else{
              //rock, paper  is remaining option
            userWin= compChoice==="rock"? false:true;

        }
      
        // calling show function
        showWinner(userWin,userChoice,compChoice);
    }
   
};
  
   // now creating  computer choices
    const getCompChoices=() =>{

    const options=["rock", "paper" ,"scissors"];

    // jitna no chahiye usse ek jayada wale se multiply krna hai, here we need index upto 2
    const  randomIdx=Math.floor(Math.random() *3); 

    return options[randomIdx];

};

  // this is for creating userchoice
  choices.forEach((choice) =>{

    console.log(choice);
    choice.addEventListener("click",() =>{

        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });

});

// NOTE- MAKING ONE SEPARATE FUNCTION FOR DOING EACH WORK IS KNOWN AS MODULAR WAY OF WRITING THE CODE
