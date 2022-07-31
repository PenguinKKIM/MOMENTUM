const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginClick(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeting(username);
}

function showGreeting(username){
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginClick);


const savedName = localStorage.getItem(USERNAME_KEY);

if(savedName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginClick);
} else {
  showGreeting(savedName);
}; 