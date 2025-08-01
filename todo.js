// Çalışması gereken ana fonksyon

 export function loadTodosFromStorages(container, todoOlustur) {
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
       if(key.startsWith("todo_")) {
            const value = localStorage.getItem(key);
            if(value) {
                todoOlustur(value, container);
            }
        }
    }
}


export function todoOlustur(text, container) {
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
        localStorage.removeItem("todo_" + text.trim());
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