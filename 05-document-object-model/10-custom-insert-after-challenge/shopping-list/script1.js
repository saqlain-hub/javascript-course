// My Try | Working xd
function insertAfter(ref, elementRef, text) {
  const element = document.createElement(elementRef);
  element.textContent = text;

  ref.insertAdjacentElement("afterend", element);
}

const ref = document.querySelector(".container");

insertAfter(ref, "h1", "Custom insertAfter");

//
// Tutorial Try
function insertAfterT(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// new element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfterT(li, firstItem);
