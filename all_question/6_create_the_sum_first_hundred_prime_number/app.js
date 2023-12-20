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

function isPrime(_num) {
	for(var i = 2; i < _num; i++) {
		if(!(_num % i)) {
			return false
		}
	}
	return true;
}


function sumPrimes(_num) {
	var sum = 0;
	for(var i = 2; i <= _num; i++) {
		if(isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}

console.log (sumPrimes(100)) 
sumPrimes(5) 

