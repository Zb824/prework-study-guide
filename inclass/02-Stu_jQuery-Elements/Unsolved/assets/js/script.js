var pTag = $("<p>");
pTag.text = ("~ Carol Dweck");

pTag.addClass("plain");

var h1Tag = $("<h1>");

h1Tag.text("Love Challenges, Be ILntrigued by Mistakes, Enjoy Effort, and Keep Learning.");


h1Tag.addClass("fancy");

h1Tag.append(pTag);


$("#root").append(h1Tag);






// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"

// TODO: Add the class `plain` to the author element

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable

// TODO: Add the following quote text to the quote element, "ove Challenges, Be ILntrigued by Mistakes, Enjoy Effort, and Keep Learning."

// TODO: Apply the class `fancy` to the quote element

// TODO: Append the author element to the quote element

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
