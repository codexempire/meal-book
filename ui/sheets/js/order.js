// get modal
const remModal = document.getElementById("remModal");
const moDal = document.getElementById("myModal");

// get button
const change = document.getElementById("change");
const remove = document.getElementById("cancel");

// get the <span> that closes the modal
const cancel = document.getElementsByClassName("close")[1];
const edit = document.getElementsByClassName("close")[0];

// when the user clicks on the button open the modal
change.onclick = () => {
  moDal.style.display = "block";
};
remove.onclick = () => {
  remModal.style.display = "block";
};

// when the user clicks on the <span> close the modal
cancel.onclick = () => {
  remModal.style.display = "none";
}
edit.onclick = () => {
  moDal.style.display = "none";
}

// if user clicks anywhere outside the modal
window.onclick = (event) => {
  if (event.target == moDal) moDal.style.display = "none";
}
window.onclick = (event) => {
  if (event.target == remModal) remModal.style.display = "none";
}