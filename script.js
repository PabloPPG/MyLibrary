const addBookButton = document.getElementById("add-book-button");
const bookCardContainer = document.getElementById("card-container");
const closeCardButton = document.getElementById("close-card-button");
const openCardButton = document.getElementById("open-card-button");
const caca = document.getElementById("caca");

function display() {
  const div = document.createElement("div");
  div.innerText = "caca";
  caca.appendChild(div);
}
display();

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  const tr = document.createElement("tr");
}

addBookButton.addEventListener("click", () => {
  bookCardContainer.style.display = "none";
});

bookCardContainer.addEventListener("click", (e) => {
  if (e.target === bookCardContainer) {
    bookCardContainer.style.display = "none";
  }
});

closeCardButton.addEventListener("click", () => {
  bookCardContainer.style.display = "none";
});

openCardButton.addEventListener("click", () => {
  bookCardContainer.style.display = "block";
});
