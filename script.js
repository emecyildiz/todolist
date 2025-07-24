const button = document.getElementById("button");
const container = document.getElementById("list");
const info = document.getElementById("input");

//Sayfa Yüklenince çalışacak kod
window.addEventListener("load",function(){
    loadTodosFromStorages();
    
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

     if(localStorage.getItem(text)) {
        alert("Bu görev zaten mevcut!");
        return;
    }

    localStorage.setItem(text, text);
    todoOlustur(text);
    info.value = "";


})

function loadTodosFromStorages(){
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if(value) {
            todoOlustur(value);
        }
    }
}

// Çalışması gereken ana fonksyon
function todoOlustur(text) {
    const newdiv = document.createElement("div");
    const newbutton = document.createElement("button");
    const newbutton1 = document.createElement("button");
    const newlabel = document.createElement('label');

    newbutton.textContent = "-";
    newbutton1.textContent = "!";
    newbutton.classList.add("button");
    newbutton1.classList.add("button");
    newlabel.classList.add("label-css");
    newdiv.classList.add("div-css");
    newlabel.textContent = text;
    
    //görevleri silen fonksyon
    newbutton.addEventListener("click", function(){
        newdiv.remove();
        localStorage.removeItem(text);
    })
    
    //yapılan görevleri ayarlayan fonkson
    newbutton1.addEventListener("click", function(){
        if(newlabel.classList.contains("label-css")){
            newlabel.classList.add("line");
            newlabel.classList.remove("label-css");
        }else if(newlabel.classList.contains("line")){
            newlabel.classList.add("label-css");
            newlabel.classList.remove("line");
        }
        
    });
    
    newdiv.appendChild(newlabel);
    newdiv.appendChild(newbutton);
    newdiv.appendChild(newbutton1);
    container.appendChild(newdiv); 
};