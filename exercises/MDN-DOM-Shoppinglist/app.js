// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Create a function that will run in response to the button being clicked.
function whenClicked() {
  let inputValue = input.value;
  input.value = "";
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = inputValue;
  let delButton = document.createElement("button");
  delButton.innerText = "Delete";

  li.append(span, delButton);
  ul.append(li);

  delButton.addEventListener("click", () => {
    delButton.parentElement.remove();
  });
  input.focus();
}
button.addEventListener("click", whenClicked);
