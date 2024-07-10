const inputbox=document.getElementById("input-box")
const listcontainer=document.getElementById("list container")

function addTask(){
    if(inputbox.value === ''){
        alert("You Must Write Something");
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
    
        let delete1=document.createElement("delete")
        delete1.innerHTML="\u00d7"
        li.appendChild(delete1)
    }
    inputbox.value='';
    saveData()
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()

    }
    else if(e.target.tagName === "DELETE"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask()


