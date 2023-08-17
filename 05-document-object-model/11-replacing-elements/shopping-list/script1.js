function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First";

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second</li>";
}

// My try | success
function replaceAllItems() {
  const items = document.querySelectorAll("li");

  let count = 0;

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `Replaced with item ${(count += 1)}`;

    item.replaceWith(li);
  });
}

// Tutorial's Try
function replaceAllItemsT() {
  const lis = document.querySelectorAll("li");

  // lis.forEach((item, index) => {
  // item.outerHTML = "<li>Replace All</li>";

  //   if (index === 1) {
  //     item.innerHTML = "Second Item";
  //   } else {
  //     item.innerHTML = "Replace All";
  //   }
  // });

  // second try | ternary operator

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li>")
  );
}

// My Try | Using ternary operator
function replaceAllItemsTernary() {
  const lis = document.querySelectorAll("li");

  lis.forEach((item, index) =>
    index === 1
      ? (item.innerHTML = "Second Item")
      : (item.innerHTML = "Replace All")
  );
}

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";

  header.replaceChild(h2, h1);
}

// replaceFirstItem();
// replaceSecondItem();

// replaceAllItems();

// replaceAllItemsT();
// replaceAllItemsTernary();

replaceChildHeading();
