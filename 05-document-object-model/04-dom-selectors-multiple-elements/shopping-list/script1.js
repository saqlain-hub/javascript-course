// querySelectorAll()

const listItems = document.querySelectorAll(".item");
console.log(listItems[1].innerText);

listItems[1].style.color = "red";

listItems.forEach((item, index) => {
  item.style.color = "red";

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerText = "Oranges";
  }
});
