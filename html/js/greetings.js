const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const formHidden = document.querySelector("#todo-form div");
const inputHidden = document.querySelector("#todo-form input"
);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
     paintGreetings(username);
    } 
   
    function paintGreetings(username){
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
        inputHidden.classList.remove(HIDDEN_CLASSNAME);
        formHidden.classList.remove(HIDDEN_CLASSNAME);
        
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else {
        paintGreetings(savedUsername);
        
    }
 