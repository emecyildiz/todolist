import { todoOlustur, loadTodosFromStorages } from "./todo.js";
import { initializeUI, updateToggleButton } from "./ui.js";

const button = document.getElementById("button");
const container = document.getElementById("list");
const info = document.getElementById("input");

//Sayfa Yüklenince çalışacak kod
window.addEventListener("load",function(){
    loadTodosFromStorages(container, todoOlustur);
    initializeUI();
    updateToggleButton();
});

//Enter a basınca çalışacak kod 
info.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        if(info.value.trim() === ""){
            return;
        } else {
            button.click();
        }
    }
});

//butona basıcınca çalışacak kod
button.addEventListener("click", function(){
    const text = info.value.trim();
    if (!text) return;

     if(localStorage.getItem("todo_"+text.trim())) {
        alert("Bu görev zaten mevcut!");
        return;
    }

    localStorage.setItem("todo_"+text.trim(), text.trim());
    todoOlustur(text, container);
    info.value = "";


})

function changeTheme() {
    const theme = document.querySelector(".theme");
    const body = document.body;
    if (body.classList.contains("karanlık")) {
        body.classList.remove("karanlık");
        body.classList.add("aydınlık");
        theme.textContent = "Dark Theme";
        theme.style.color = "black";
    } else {body.classList.contains("aydınlık");
        body.classList.remove("aydınlık");
        body.classList.add("karanlık");
        theme.textContent = "Light Theme";
        theme.style.color = "white";
    }
}

const theme = document.querySelector(".theme");
theme.addEventListener("click", changeTheme);

