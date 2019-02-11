 
// Get the modal
const cater = document.getElementById('cartererModal');
const eModal = document.getElementById("eModal");
const ordersModal = document.getElementById("ordersModal");
const accountsModal = document.getElementById("accountsModal");

// Get the button that opens the modal
const addCater = document.getElementById("carterer");
const eBtn = document.getElementById("ecard");
const orders = document.getElementById("orders");
const accounts = document.getElementById("accounts");


// When the user clicks on the button, open the modal 
addCater.onclick = () => {
  cater.style.display = "block";
}
eBtn.onclick = () => {
  eModal.style.display = "block";
}
orders.onclick = () => {
  ordersModal.style.display = "block";
}
accounts.onclick = () => {
  accountsModal.style.display = "block";
}