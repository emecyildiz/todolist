const button = document.getElementById("button");
const container = document.getElementById("list");
const info = document.getElementById("input");

//Sayfa Yüklenince çalışacak kod
window.addEventListener("load",function(){
    for(let i = 0; i < this.localStorage.length; i++){
        const key = this.localStorage.key(i);
        const value = this.localStorage.getItem(key);
        todoOlustur(value);
    }
});

//Enter a basınca çalışacak kod 
info.addEventListener("keydown", function(Event){
    if(Event.key === "Enter"){
        if(info.value === ""){
            return;
        }else{
            button.click();
        }
    }
});

//butona basıcınca çalışacak kod
button.addEventListener("click", function(){
    const text = info.value.trim();
    if (!text) return;

    localStorage.setItem(text, text);
    todoOlustur(text);
    info.value = "";
})


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
    
    //görevleri silen fonksyon
    newbutton.addEventListener("click", function(){
        newdiv.remove();
        localStorage.removeItem(text)
    })
    
    //yapılan görevleri ayarlayan fonkson
    newbutton1.addEventListener("click", function(){
        if(newlabel.classList.contains("label-css")){
            newlabel.classList.add("line");
            newlabel.classList.remove("label-css")
        }else if(newlabel.classList.contains("line")){
            newlabel.classList.add("label-css")
            newlabel.classList.remove("line")
        }
        
    })
    newdiv.classList.add("div-css")
    newlabel.textContent = value;
    
    newdiv.appendChild(newlabel);
    newdiv.appendChild(newbutton);
    newdiv.appendChild(newbutton1);
    container.appendChild(newdiv); 
};



