const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("h1");

const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}


loginForm.addEventListener("submit", onLoginSubmit);


function paintGreetings(username){
    h1.innerHTML = `Hello ${username}`;
    h1.classList.remove("hidden");
}


const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
