
function saveName(){
    let local=document.getElementById("nameInput").value
    localStorage.setItem("name",local);
    
}
function getName(){
 let getname= localStorage.getItem("name");
    document.getElementById("output").textContent=getname
}
function clearStorage(){
    localStorage.clear();
    document.getElementById("output").textContent="All are clear"
}