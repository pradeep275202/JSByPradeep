var parent =document.getElementById("parent")
var lastchild = parent.lastElementChild;
var createelement =document.createElement("li")
createelement.textContent=("newfour")
parent.replaceChild(createelement,lastchild)