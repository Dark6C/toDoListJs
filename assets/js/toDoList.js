let formInput = document.querySelector("#form");
let taskInput = document.querySelector("#task");
const list = document.querySelector("ul");

// let displayAllTasks = document.querySelector('');

let taskElem = document.querySelector("#taskElement");


let addButton = document.querySelector("#addBtn");
// let editButton = document.querySelector("#editBtn");

let delButtonAll = document.querySelector("#deleteBtnAll");


// window.onload = loadTasks;

// function loadTasks() {

//   let taskName = Array.from(JSON.parse(localStorage.getItem("taskName")));

//   taskName.forEach(task => {
//     const list = document.querySelector("ul");
//     const li = document.createElement("li");
//     li.innerHTML = `<div class="template d-flex justify-content-between">
//     <input class="formCheckInput mt-2" type="checkbox" value="" id="firstCheckboxStretched" />
//     <input type="text" value="${taskInput.value}" onfocus="getUserTask(this)" onblur="editTask(this)" class="task border-0 bg-transparent w-75" id="taskInput">                    
//       <button type="button" class="trash bg-transparent border-0" id="deleteBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
//         viewBox="0 0 16 16">
//         <path
//           d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
//         <path
//           d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
//       </svg>
//     </button>
//     </div>`;
//     list.insertBefore(li, list.children[0]);
//   });
// }



// local storage
let taskStorage = localStorage.getItem("taskName")
  ? JSON.parse(localStorage.getItem("taskName"))
  : [];

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  taskStorage.push(taskInput.value);
  localStorage.setItem("taskName", JSON.stringify(taskStorage)); 
});
// local storage

// function taskComplete(event) {
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
//   tasks.forEach(task => {
//     if (task.task === event.nextElementSibling.value) {
//       task.completed = !task.completed;

//     }
//   });

// delete list et local storage



function addTask() {
  if (taskInput.value === "") {
    alert("Ajoutez une tâche");
    return false;
  }

  if (document.querySelector(`input[value="${taskInput.value}"]`)) {
    alert("La tâche existe déjà");
    return false;
  }

  // localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { taskInput: taskInput.value, completed: false }]));

  const li = document.createElement("li");
  li.id = "toDoList"
  li.innerHTML = `
  <div class="template d-flex justify-content-between">
  <input class="formCheckInput mt-2" type="checkbox" value="" id="firstCheckboxStretched" />
  <input type="text" value="${taskInput.value}" onfocus="getUserTask(this)" onblur="editTask(this)" class="task border-0 bg-transparent w-75" id="taskInput">                    
    <button type="button" class="trash bg-transparent border-0 deleteBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
      viewBox="0 0 16 16">
      <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
      <path
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
    </svg>
  </button>
  </div>
`;
  taskElem.insertBefore(li, list.children[0]);
  taskInput.value = "";

deleteBtnAll.addEventListener('click', function() {
    localStorage.clear();
    list.innerHTML="";
    const removeDiv = document.getElementById("toDoList")
    removeDiv.remove();
    alert("La liste a été supprimée!");
  });


let selectBtn =  document.querySelector('.deleteBtn')
  selectBtn.addEventListener('click', (e) => {
  })
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  addTask();
});



// document.querySelectorAll(".deleteBtn").delButton.addEventListener('click', function() {
//   let listElements = document.querySelectorAll("#taskInput li");

// for (let i = 0; (li = listElements[i]); i++) {
//   li.parentNode.removeChild(li);
// };
// })

listItem.querySelector('.form-check-input');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    moveToCompletedTasks(listItem);
  }
  else {
    moveBackToTaskList(listItem);
  }
  });
  listItem.addEventListener('click', editTask)


const moveToCompletedTasks = (listItem) => {
  const taskCompleted = document.querySelector("#taskCompleted");
  taskCompleted.appendChild(listItem);
};
const moveBackToTaskList = (listItem) => {
    const taskList = document.getElementById('list');
    taskList.appendChild(listItem);
};


let userTask = null;

function getUserTask(event) {
  userTask = event.value;
}

function editTask(event) {
  let tasksName = Array.from(JSON.parse(localStorage.getItem("taskName")));
  if (event.value === "") {
    alert("La liste est vide");
    event.value = userTask;
    return;
  }
tasksName.forEach(task => {
  if (task.task === event.value) {
    alert ("La tâche existe déjà");
    event.value = userTask;
    return;
  }
});
tasksName.forEach(task => {
  if (task.task === userTask) {
    task.task === event.value;
  }
});
localStorage.setItem("tasksName", JSON.stringify(tasksName));
}
