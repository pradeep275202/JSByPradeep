alert("Enter the values of a")
let a = prompt("enter a here,570")
a = Number.parseInt(a)
alert("you enterd a of type"+(typeof a))
let write = confirm ("do you want to write to the page")
if(write){
          document.write(a)
}
else{
          document.write("please allow me to write")
}