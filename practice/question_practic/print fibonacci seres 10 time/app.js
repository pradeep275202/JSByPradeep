function fibonacci(num){
let num1 =0
let num2 =1
let sum;
for(var i=0;i<num;i++){
          sum = num1 + num2;
          num1 = num2
          num2 = sum;
}
return num2

}
console.log("fibonacci seres 10 time",fibonacci(10))