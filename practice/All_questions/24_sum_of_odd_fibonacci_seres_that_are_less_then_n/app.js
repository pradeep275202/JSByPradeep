// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// // Print the first 10 Fibonacci numbers
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacci(i));
// }

function printFibonacci(n) {
  var a = 0;
  var b = 1;
  var c;
  for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}

printFibonacci(10); // prints the first 10 numbers in the Fibonacci series
