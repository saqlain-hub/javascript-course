const clearBtn = document.querySelector("#clear");

// function onClear() {
//   alert("Clear Items");
// }

//JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert("Clear items");
// };

// clearBtn.onclick = function () {
//   console.log("Clear items");
// };

// addEventListener()
// clearBtn.addEventListener("click", () => alert("Clear Items"));
// clearBtn.addEventListener("click", () => console.log("Clear Items"));

// pass function
// clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

clearBtn.addEventListener("click", clearItems);

const ul = document.querySelector("ul");
function clearItems() {
  // ul.remove();
  // ul.innerHTML = "";

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}
