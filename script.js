const addButton = document.getElementById("add-book-button");
const bookCardContainer = document.getElementById("card-container");
const closeCardButton = document.getElementById("close-card-button");

addButton.addEventListener("click", () => {
  bookCardContainer.style.display = "block";
});

bookCardContainer.addEventListener("click", (e) => {
  if (e.target === bookCardContainer) {
    bookCardContainer.style.display = "none";
  }
});

closeCardButton.addEventListener("click", () => {
  bookCardContainer.style.display = "none";
});
