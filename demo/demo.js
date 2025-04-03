// Get modal and buttons
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const closeSpan = document.getElementsByClassName("close")[0];

// Open modal when the button is clicked
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Close modal when the close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Close modal when the 'X' is clicked
closeSpan.onclick = function() {
    modal.style.display = "none";
}

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
