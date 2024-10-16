var inputAdd = document.getElementById("addItem")
var btn = document.getElementById("btn")
var res = document.getElementById("item")
var remove = document.getElementById("remove")

btn.addEventListener("click", adicionar)

function adicionar(){
    var newitem = (inputAdd.value)
    
    res.innerHTML += `${newitem} </br>`
}

remove.addEventListener("click", apagar)

function apagar(){
    res.innerHTML = null
}