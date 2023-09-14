let runAgain = true;
const canDrive = (age) =>{
          return age >= 8? true:false
}
while (runAgain){
          let age = prompt("enter your age")
          age=num.parseInt(age)
          if (age<0){
                    console.error("please enter a vlid age");
          }
       break   
       if(can drive(age)){
          alert("yes you can drive")
}
else{
          alert ("you can not drive")
}
 runAgain =(comfirm("do you want to play again"))
}


