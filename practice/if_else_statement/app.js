 var age=prompt("enter your age")
 age = Number.parseInt(age)
if(age<0){
          alert("this is invalid age");
}
else if(age<10){
          console.log("you are child you play with toys ")

}
else if(age<17){
     console.log("your age under 17 and you think drive")     
}          

else if(age >= 18 && age <= 70){
          console.log("you can drive because your age beetween 18 and 70")
}
else{
          console.log("you can not drive because your age above 70")
}