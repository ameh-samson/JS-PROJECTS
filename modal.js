// Variables

let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

// Event Listers

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// This enables the modal container to disappear as window is the highest in the DOM tree
window.addEventListener("click", function () {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
