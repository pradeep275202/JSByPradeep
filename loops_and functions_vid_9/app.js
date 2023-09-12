 /*for (let i = 0; i < 500; i++){
          console.log(i)

}
*/

// program to add first natural numbers

let sum = 0
let n = prompt("enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
          sum+=(i+1)
}
console.log("sum of first  "  +  n  +   "  natural number is   "  + sum)


let obj = {
          harry : 90,
          shubh :45,
          shivika : 30,
          ritika: 57,
          shiv : 23
}
for (let a in obj){
          console.log("marks of " + a + "are" + obj[a])
}

for (let b of  "harry" ){
          console.log(b)

}