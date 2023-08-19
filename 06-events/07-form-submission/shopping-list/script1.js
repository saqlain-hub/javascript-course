const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  console.log("submit");
}

form.addEventListener("submit", onSubmit);
