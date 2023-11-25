// problem no - 2
// in q1 use confirm to ask the user if he wants to see the prompt again

let runAgain = true ;
const canDrive = (age) =>{
          return age >= 18? true:false
}
while (runAgain){
          let age = prompt("Enter your age")
          age = Number.parseInt(age)
          if(canDrive(age)){
                    alert("yes you can drive")
          }
          else{
                    alert("you cannot drive")
          }
          runAgain = confirm("do you want to play again")
}
