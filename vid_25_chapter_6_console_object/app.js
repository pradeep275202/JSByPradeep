obj = {a:1,b:2,c:3}
console.table(obj)
console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err"!=false)
console.assert("err" == false)
console.time("for loop")
for(let i = 0; i<500; i++){
          console.log(233)
}
console.timeEnd("for loop")

console.time("while loop")
let i = 0;
while(i<500){
          console.log(233)
          i++; 
}
console.timeEnd("while loop")