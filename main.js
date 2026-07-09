
function addtask(){
    const newtask = document.createElement("li");
    const tasklist = document.getElementById("tasklist");
    tasklist.appendChild(newtask);
    tasklist.textContent = document.getElementById("taskinput").value;
    document.getElementById("taskinput").value = ""
    marktask(newtask)
    Deltask(newtask)
}
function marktask(newtask){
    const markbtn = document.createElement("button");
    markbtn.textContent = "done";
    tasklist.appendChild(markbtn);
    markbtn.onclick= function (){
        alert("Marked as Read");
        markbtn.disabled = true;
        document.getElementById("tasklist").style.borderColor = "green purple";
    }
}
function Deltask(newtask){
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    tasklist.appendChild(delbtn);
    delbtn.onclick = function(){
        tasklist.remove()
    }
}
