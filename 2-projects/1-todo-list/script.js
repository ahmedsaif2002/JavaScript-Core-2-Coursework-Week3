function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let li = document.createElement("li");
    li.innerText = todo.task;
    li.classList.add("list-group-item");

    let badge = document.createElement("span");
    badge.classList.add("badge", "bg-primary", "rounded-pill");
    li.appendChild(badge);

    let completeBtn = document.createElement("i");
    completeBtn.classList.add("fa", "fa-check");
    completeBtn.setAttribute("aria-hidden", "true");
    completeBtn.addEventListener("click", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    badge.appendChild(completeBtn);

    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa", "fa-trash");
    deleteBtn.setAttribute("aria-hidden", "true");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
    badge.appendChild(deleteBtn);

    list.appendChild(li);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  let input = document.getElementById("todoInput");
  let newTodo = { task: input.value, completed: false };
  todos.push(newTodo);
  populateTodoList(todos);
  input.value = ""; // reset the input field
  let addTodoBtn = document.getElementById("add-todo");
  addTodoBtn.addEventListener("click", addNewTodo);
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let list = document.getElementById("todo-list");
  let todos = list.getElementsByTagName("li");

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    if (todo.style.textDecoration === "line-through") {
      todo.remove();
    }
  }
}
