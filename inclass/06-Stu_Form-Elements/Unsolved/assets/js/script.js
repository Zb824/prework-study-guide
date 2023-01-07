var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var inputField =$ ('#shopping-input');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`


shoppingFormEl.on("submit", function(event) {
  event.preventDefault();
  var newItem = inputField.val()
  var liTag = $("<li>")
  liTag.text(newItem);
  shoppingListEl.append(liTag);
})


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
