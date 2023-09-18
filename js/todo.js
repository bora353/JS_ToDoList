const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(event) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //localStorage.setItem("todos", toDos);
}

// 삭제 버튼 함수 ⭐⭐⭐⭐⭐
function deleteToDo(event) {
  console.log(event.target.parentNode.innerText);
  const li = event.target.parentElement;
  li.remove();
}

// To Do List에 추가 함수
function paintToDo(newTodo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

// input submit 관련 함수
function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayhello(item) {
  console.log("하잇!", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach((item) => console.log("바로", item));
} else {
}
