let pageTitles = document.getElementsByClassName("page-title"); // ger en lista
console.log(pageTitles);

//let pageTitle = pageTitles[0]; // ta ut första elementet

// Ett mer modernt sätt att hämta från ett klassnamn
let pageTitle = document.querySelector(".page-title"); // Använder css selectors, plockar ut första träffen
//let pageTitle = document.querySelector("#page-title"); // Ifall page-title var ett id

pageTitle.textContent = "Awesome site"; // används för att sätta en ny text 
pageTitle.style.backgroundColor = 'maroon'; // css egenskaper skrivs med camel case
pageTitle.style.color = '#fff'; // kan använda hexa koder här också, fungerar precis som i css
pageTitle.style.padding = '1.5em';


const textField = document.querySelector('.text-field');
const textPara = document.querySelector('.text-para');
const saveBtn = document.querySelector('.save-btn');

function handleSaveText() {
  let textValue = textField.value;
  textPara.textContent = textValue;
}

//saveBtn.addEventListener('click', handleSaveText);

// Går även att uppdatera kontinuerligt med ett input event
// för alla events, se https://www.w3schools.com/jsref/dom_obj_event.asp

textField.addEventListener('input', handleSaveText);

// Spara ner det som en todo lista
const textList = document.querySelector('.text-list');
function saveTextItem() {
  let li = document.createElement('li'); // skapar ett ny li-tag
  li.textContent = textField.value;
  li.className = 'text-item';

  textList.append(li);

  //*** Ifall endast få har somnat
  li.addEventListener('click', removeTextItem);
}

saveBtn.addEventListener('click', saveTextItem);


//*** Flytta den funktion ovanför förgående för bättre kodstruktur (inte ett måste)
function removeTextItem(event) { // alla händelser har en implicit event parameter som innehåller diverse data om eventet
  console.log(event);

  let li = event.target;
  li.remove();
}

