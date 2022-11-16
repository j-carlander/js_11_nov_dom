// Code here!

// # DOM exercises
// ## Kom igång
// Ladda ner sinus minishop. All din kod ska skrivas i *script.js*.
// I denna övning kommer du få öva på:

// - Leta reda på saker i DOM och ändra innehåll
// - Lyssna efter events på olika element
// - Lägga till ny HTML med JS

// ## DOM Selecta!
// **1.** Byt *namn* på första hoodien från *Ash* till *Potato*.
const subTitle1 = document.querySelector(".art-1 h3"); // Första artikelns h3
subTitle1.innerText = "Potato"; // ändrar värdet på underrubriken

// **2.** Byt *namn* på *Home* till *Start*.

const navLinks = document.querySelectorAll("nav a"); // Hittar länkarna uppe i nav
console.log(navLinks);
const startLink = navLinks[0]; // Väljer ut första klänken som är Home

startLink.innerText = "Start"; // Ändrar texten till Start

const footerMenu = document.querySelector("footer article"); // Väljer ut första artikeln i footer som är menyn
const footerMenuLinks = footerMenu.querySelectorAll("a"); // Väljer alla länkar i Menu
console.log(footerMenuLinks);
const footerStartLink = footerMenuLinks[0]; // Väljer ut första länken som är Home

footerStartLink.innerText = startLink.innerText; // ändrar texten på startlänken i footer till samma som startlänken i nav

/*
// Genomgång av uppgifterna
let anchors = document.querySelectorAll("a");
for (let anchor of anchors) {
  if (anchor.innerText == "Home") {
    // Löser uppgift 2
    anchor.innerText = "Start";
  }
  if (anchor.innerText == "Contact") {
    // Löser uppgift 3
    anchor.innerText = "Mail Us";
  }
}
*/
// **3.** Byt *namn* på *Contact* till *Mail Us*.
navLinks[2].innerText = "Mail Us"; // Ändrar texten på länk nummer 3, vilken är Contact, till mail us
footerMenuLinks[2].innerText = navLinks[2].innerText; // Behöver bara ändra på raden ovan för att ändra på båda länkar

// **4.** Byt ut informationen om *Sinus Hoodie  - Fire*.

const art2Info = document.querySelector(".art-2 p"); // Hittar p-taggen i art-2 som innehåller info om Fire-hoodie.
console.log(art2Info.innerText);
art2Info.innerText = "Jäkligt snygg tröja!";

// **5.** Byt *bakgrundsfärg* och *text* på en knapp.

const art3Button = document.querySelector(".art-3 button"); // Väljer ut knappen i art-3 som är Water-tröjan
art3Button.innerText = "Köp";
art3Button.style.backgroundColor = "blue";

// **6.** Byt bakgrundsfärg på någon av produkterna.
const art1 = document.querySelector(".art-1");
art1.style.backgroundColor = "lightgrey"; // Använder första producten då den redan var utvald tidigare

// **7.** Byt ut adressen på sidan.
const footerAdress = document.querySelector("footer article:nth-child(2) p"); // Väljer ut footerns andra artikels p-tagg vilken innehåller addressen
console.log(footerAdress.innerHTML);
footerAdress.innerHTML =
  "Skatepark <br> Gustaf Adolfs väg 40 <br> 761 42 Norrtälje";

// **8.** Byt färg på samtliga ```<p>```.

const allPTags = document.querySelectorAll("p"); // väljer ut alla p
for (p of allPTags) {
  // för varje p av alla byt färg
  p.style.color = "#a9a9a9";
}

// **9.** Ändra text på samtliga knappar till *add to cart*.
const allButtons = document.querySelectorAll("button"); // Väljer alla knappar på sidan
for (button of allButtons) {
  button.innerText = "add to cart";
}

// **10.** Lägg till classen *active* på menyalternativet *home*.

startLink.classList.add("active");

// **11.** Ta bort classen *logo* på logotypen.
const logoImg = document.querySelector("header img");
logoImg.classList.remove("logo");

//## Add Content

// **12.** Lägg till ett nytt menyalternativ.
const nav = document.querySelector("nav"); // Väljer nav elementet
const navImg = nav.querySelector("img"); // väljer bilden i nav elementet

const newAnchor = document.createElement("a"); // Skapar en ny a-tagg
newAnchor.setAttribute("href", "#"); // Sätter referensen till sidan i a-taggen
newAnchor.innerText = "About Us"; // Sätter visningstext för a-taggen

// nav.insertBefore(a, navImg); // Från genomgång av uppgift på lektion

navImg.remove(); // Tar bort bilden från nav, för att kunna få rätt ornding på länkarna i nav
nav.append(newAnchor); // Lägger till nya länken i nav
nav.append(navImg); // Lägger tillbaka bilden sist i nav

footerMenu.append(newAnchor.cloneNode(true)); // Lägger till en kopia av nya a-taggen även i footermenyn

// **13.** Lägg till en ny produkt med följande info.

// |el|beskrivning|
// |---|---|
// |img |hoodie-forrest.png|
// |h2 | Sinus Hoodie |
// |h3 |Forrest|
// |p|Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.|
// const newArticle = document.createElement("article"); // skapar en ny artikel för nya produkten
// newArticle.classList.add("art-4"); // lägger till klassen art-4

// const newFigure = document.createElement("figure"); // skapa först figurelementet
// const newImg = document.createElement("img"); // sedan bildelemnetet
// newImg.setAttribute("src", "img/hoodie-forrest.png"); // lägger till attributen till bilden
// newImg.setAttribute("alt", "hoodie");
// newFigure.append(newImg); // lägger till bildelementet i figuren

// const newTitle = document.createElement("h2"); // Skapa nya rubriken
// newTitle.innerText = "Sinus Hoodie"; // lägger till värdet till rubriken

// const newSubTitle = document.createElement("h3"); // skapar nya underrubriken
// newSubTitle.innerText = "Forrest"; // lägger till värdet till underrubriken

// const newProdInfo = document.createElement("p"); // skapar nya produktbeskrivningen
// newProdInfo.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."; // lägger till värdet på produktbeskrivningen

// const newButton = document.createElement("button");
// newButton.innerText = "add to chart";

// newArticle.append(newFigure, newTitle, newSubTitle, newProdInfo, newButton); // Lägger till alla nya element i nya artikeln

// console.log(newArticle.innerHTML);

const main = document.querySelector("main");
// main.append(newArticle);

// från genomgång på lektion
// const newArticleContent = //skapar en stäng innehållandes all HTML för samma sak som ovan, kan då lägga till den som newArticle.innerHTML ist för all append.
// `
// <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
// <h2>Sinus Hoodie</h2>
// <h3>Forrest</h3>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
// <button>add to chart</button>
// </article>
// `;

// från genomgång på lektion

function createNewArticle(parent, imgSrc, h2Text, h3Text, paraText) {
  const newArticleContent = `
<figure><img src="${imgSrc}" alt="hoodie"></figure>
<h2>${h2Text}</h2>
<h3>${h3Text}</h3>
<p>${paraText}</p>
<button>add to chart</button>
</article>
`;
  const newArticle = document.createElement("article");
  newArticle.innerHTML = newArticleContent;
  parent.append(newArticle);
}

const articlePics = [
  "img/hoodie-forrest.png",
  "img/hoodie-ash.png",
  "img/hoodie-fire.png",
  "img/hoodie-ocean.png",
  "img/hoodie-forrest.png",
];
const articleSubTitles = ["Forrest", "Ash", "Fire", "Water", "Forrest"];

// skapa 5 till hoodies
for (let i = 0; i < 5; i++) {
  createNewArticle(
    main,
    articlePics[i],
    "Sinus Hoodie",
    articleSubTitles[i],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."
  );
}

// ## Events
// **14.** Lyssna efter ett klick på logotypen (```.logo```).
//När den registrerar ett klick skall du console.log:a "found you!";

// använder logoImg som redan är skapad i tidigare övning som dessutom tar bort classen.
logoImg.addEventListener("click", () => {
  console.log("found you!");
});
// **15.** Lyssna efter klick på samtliga produkter ( ```<article>```).
//När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

const allProdArticles = main.querySelectorAll("main article");

// Genomgång lektion
// function handleArticelClick(event) {
//   // implicit event objekt (följer med Eventlistener)
//   console.log(event.currentTarget); // currentTarget är det elemetn som reggades i eventlistener
//   let article = event.cuurentTarget;
//   let h3 = article.querySelector("h3");
//   console.log("Hi, I'm article " + h3.textContent);
// }

// for (article of allProdArticles) {
//   article.addEventListener("click", handleArticelClick);
// }

for (article of allProdArticles) {
  const subTitleText = article.querySelector("h3").innerText;
  article.addEventListener("click", () => {
    console.log(`Hi, I´m article ${subTitleText}`);
  });
}
