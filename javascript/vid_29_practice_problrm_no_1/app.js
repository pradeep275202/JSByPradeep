// problem no - 1
/* write a program using prompt function to take input of age as a
   value from the user and use alert to tell him if he can drive */

let age = prompt("enter your age")
age = Number.parseInt(age)
const canDrive = (age) =>{
          return age >18 ? true:false
}
if (canDrive(age)){
          alert ("yes you can drive")
}
else{
          alert("you can not drive")
}