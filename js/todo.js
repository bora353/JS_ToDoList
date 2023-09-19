const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = []; // let으로 해서 update 가능하게

// 삭제 버튼 함수 ⭐⭐⭐⭐⭐
function deleteToDo(event) {
  //console.log(event.target.parentNode.innerText);
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// To Do List에 추가 함수
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

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

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj); // 배열에 Object 넣기
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); // form에서 엔터키 누르면 submit 이벤트 자동 발생

// localStorage에 저장
function saveToDos(event) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 매개변수로 parsedToDos가 들어가며 콜백 함수 호출
}
