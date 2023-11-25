// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (var i = 2; i < n; i++) {
//     console.log('i value', i,"n value ",n," n % i == 0 ",n%i)
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(5)); // false
// // console.log(isPrime(11)); // true


// function primenumber(k){
//   var prime =[];
//   for(var i=1;i<k;i++){
//     if(k % 2=== 0){
//       return false;
//     }

//   }
//   return true;

// }
// console.log(primenumber(100))

function primenumber(k){
  for(var i = 2; i<k; i++){
      if(k % i === 0){
          return false;
          
        
      }
  }
  return true;  
}
for(i=0;i<=100;i++){
  if(primenumber(i)){
      console.log(i)
  }
}
