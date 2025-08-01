import { todoOlustur, loadTodosFromStorages } from "./todo.js";

const button = document.getElementById("button");
const container = document.getElementById("list");
const info = document.getElementById("input");

//Sayfa Yüklenince çalışacak kod
window.addEventListener("load",function(){
    loadTodosFromStorages(container, todoOlustur);
    
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



