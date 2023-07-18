let formInput = document.querySelector("#form");
let taskInput = document.querySelector("#task");

let taskElem = document.querySelector("#taskElement");
let taskCompleted = document.querySelector("#taskCompleted");

let addButton = document.querySelector("#addBtn");
// let editButton = document.querySelector("#editBtn");
let delButton = document.querySelector("#deleteBtn");
let delButtonAll = document.querySelector("#deleteBtnAll");

// local storage
let taskStorage = localStorage.getItem("taskName")
  ? JSON.parse(localStorage.getItem("taskName"))
  : [];

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  taskStorage.push(taskInput.value);
  localStorage.setItem("taskName", JSON.stringify(taskStorage));
  listContent(taskInput.value);
  taskInput.value = "";
});
// local storage