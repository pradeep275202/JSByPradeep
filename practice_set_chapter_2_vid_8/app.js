// problem no-1
/*
let age = prompt("whats your age?")
if(age>10 && age<20){
          console.log("your age lies beetween 10 and 20")
}
else{
          console.log("your age dosent lies beetween 10 and 20")
}  */

//problem n0-2


/*
let age = prompt("whats your age")
switch(age){
          case'12' :
                    console.log("your age is 12")
                    break

          case '13':
                    console.log("your age is 13")   
                    break
             
          case '14':
                    console.log("your age is 14")   
                    break
          case '15':
                    console.log("your age is 15") 
                    break
          default:
                    console.log("your age is not special")                 
}

*/

/*
// problem no-3

let num = prompt("what your age")
num = Number.parseInt(num)

if(num % 2 == 0 && num % 5 == 0){
          console.log("your age is divisible by 2 and 5")
}

else {
          console.log("your number is not divisible by 2 and 5")
}

// problem no - 4

*/

let num = prompt("whats your age ")
num = Number.parseInt(num)

if(num % 2 == 0){
          console.log("your age divisible by 2")

}

else if(num % 3 == 0){
          console.log("your age divisible by 3")
}
else{
          console.log("your age divisible by 2 and 3")
}

 // problem no - 5  use turnory operator

 let age = 19
 let a = age > 18 ? "you can drive" : "you cannot drive"
 console.log(a)
