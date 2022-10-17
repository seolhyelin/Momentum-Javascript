const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput = todoForm.querySelector("#todo-form input"); 와 같음
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todosArray = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}
function deleteTodo(e) {
  const li = event.currentTarget.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");

  span.innerText = newTodo.text;
  const button = document.createElement("button");

  button.innerText = "🚫";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };

  todosArray.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todosArray = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
