var keyField = document.querySelector("#key");
var codeField = document.querySelector("#code");
var statusField = document.querySelector("#status");


function keydownAction(event) {
  console.log(event)
  keyField.textContent = event.key;
  codeField.textContent = event.code;
  statusField.innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  statusField.innerHTML = "KEYUP Event";

}

document.addEventListener("#keyup", keyupAction);
document.addEventListener("keydown", keyupAction);


