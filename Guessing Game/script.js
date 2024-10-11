let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.getElementById("wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random()*100)+1
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click",()=>{
  GuessesNumber();
})

function GuessesNumber(){
  if(input.value<1 || input.value>100 || isNaN(input.value))
    wrong.innerHTML = "Enter Between 1 To 100";
  else{
    numGuesses ++;
    guesses.innerHTML = "No. Of Guess :"
     +numGuesses;
    if(input.value >answer){
      wrong.innerHTML = "You Guessed Too High !";
      input.value = "";
    }
    else if(input.value < answer){
       wrong.innerHTML = "You Guessed Too Low !";
       input.value =  "";
    }
    else{
      wrong.innerHTML = "Congrattulation You Guessed The Correct Anser";
        setTimeout(()=>{
       resetGame();
   },5000)    
 }
  }
 }

 function resetGame(){
  numGuesses = 0;
  answer = Math.floor(Math.random()*100)+1;
  input.value = "";
  guesses.innerHTML = "No. Of Guess : 0"
 }