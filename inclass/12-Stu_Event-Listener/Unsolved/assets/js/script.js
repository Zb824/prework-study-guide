var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");
var button = document.querySelectorAll("button");

function setCounterText() {
  countEl.textContent = count;
}

incrementEl.addEventListener("click", function(){
  count ++;
  setCounterText();
})

// TODO: Add event listener to increment button

// TODO: Add event listener to decrement button 

decrementEl.addEventListener("click", () => {
  if (count > 0 ){
    count--;

  }
  setCounterText();
})

// buttons.forEach( function(btn) {
  // btn.addEventListener("click", function(){
    // if 

  // })
// })