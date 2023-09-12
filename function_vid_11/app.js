// function 

const hello  = () => {
          console.log("hey how are you I am to fine")
          return "hi"
}

function oneplusavg(x,y){
          return 1 + (x,y)/2
}

const sum = (p,q) =>{
          return p+q
}
let a = 5;
let b = 2;
let c = 3;
let v = hello();
console.log(v)
console.log("one plus average of a and b is",oneplusavg(a,b))
console.log("one plus average of b and c",oneplusavg(b,c))
console.log("one plus average of a and c is",oneplusavg(a,c))
console.log(sum(9,7))