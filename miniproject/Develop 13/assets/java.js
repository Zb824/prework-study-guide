console.log("connectionTest");
const startButton = document.querySelector(".start-button");
const timerText = document.querySelector(".timer-count");

let secondsLeft = 90;


function start() {
  inputField();
  timerText.textContent = "";

}

function startTimer(){
  console.log("startTimer") 
  countdown = setInterval(timer, 1000);
}

function timer(){
  console.log("TimerFunction")
  secondsLeft = 90;
  timerText.textContent = `${secondsLeft}`;
  secondsLeft--;
    if(secondsLeft = 0){
      clearInterval(countdown);
    } else { 
      Element.innerHTML = secondsLeft + `seconds remain`;
      // timerText.textContent="0";
    
     }
}

startButton.addEventListener("click", startTimer)