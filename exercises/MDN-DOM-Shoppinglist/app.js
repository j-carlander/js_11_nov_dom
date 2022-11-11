// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Create a function that will run in response to the button being clicked.
function whenClicked() {
  // Inside the function body, start off by storing the current value of the input element in a variable.
  let inputValue = input.value;

  // Next, empty the input element by setting its value to an empty string — ''.
  input.value = "";

  // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
  let li = document.createElement("li");
  let span = document.createElement("span");
  let delButton = document.createElement("button");

  // Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
  span.innerText = inputValue;
  delButton.innerText = "Delete";

  //Append the span and the button as children of the list item.
  li.append(span, delButton);
  // Append the list item as a child of the list.
  ul.append(li);

  // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
  delButton.addEventListener("click", () => {
    delButton.parentElement.remove();
  });
  //Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
  input.focus();
}

// Adding an eventlistener to the button, listening for 'click' and calling the function
button.addEventListener("click", whenClicked);
