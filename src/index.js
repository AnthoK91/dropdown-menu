import "./style.css";
const dropdown = document.body.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown-list");

dropdown.addEventListener("click", () => {
  if (dropdownList.className === "dropdown-list") {
    console.log("dropdown-item");
    dropdownList.classList.remove("dropdown-list");
    dropdownList.classList.add("dropdown-item-hide");
  } else {
    dropdownList.classList.add("dropdown-list");
    dropdownList.classList.remove("dropdown-item-hide");
  }
});

console.log("hello world");
