// Syftet med funktioner är att rama in (isolera) särskilda funktioner i programmet
// Ett annat syfte är att skapa kod som går att återanvända med ett enkelt funktionsanrop

function printGreeting(username) { // funktion med namnet printGreeting och en parameter username

  // funktionskroppen (där koden hamnar)
  console.log(`Welcome to this awesome console ${username}`);
  console.log("We wish to see more of you");
}


function printList(list) {
  for (let item of list) {
    console.log(item);
  }
}

let fruits = ["Bananas", "Pear", "Apple", "Cetrus"];
printList(fruits);

fruits.splice(2, 1);
printList(fruits); // Slipper skapa en till for loop

