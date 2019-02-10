//dropdown
const dropdown = document.getElementById("dropdown-button");
const sidenav = document.getElementById("sidenav");
dropdown.onclick = function() {
  if (sidenav.style.display === "block") return sidenav.style.display = "none";
  return sidenav.style.display = "block";
}
window.onclick = function() {
  sidenav.style.display = "none";
}
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("card");
const btn1 = document.getElementById("card1");
const btn2 = document.getElementById("card2");
const btn3 = document.getElementById("card3");
const btn4 = document.getElementById("card4");
const btn5 = document.getElementById("card5");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = () => {
  modal.style.display = "block";
}
btn1.onclick = () => {
  modal.style.display = "block";
}
btn2.onclick = () => {
  modal.style.display = "block";
}
btn3.onclick = () => {
  modal.style.display = "block";
}
btn4.onclick = () => {
  modal.style.display = "block";
}
btn5.onclick = () => {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
}