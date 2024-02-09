// for(var i=0;i<=100;i++){
//           var notprime = false
//           for(var j=2;j<=i;j++){
//               if(i%j===0 && j!==i){
//                   notprime = true
//               }
//           }
//           if(notprime == false){
//               console.log(i)
//           }
//       }

// var arr = [1, 2, 5, 7, 9, 10];
// var arr1 = [44, 5, 3, 2, 11];
// var newarr = []
// for (var i = 0; i <= arr.length; i++)

//   for (var j = 0; j <= arr1.length; j++) {

//         if (arr[i] != arr1[j])
//             return false

//     // If all elements were same.
//     return true
// }

//
// function fibonacci(n) {

//         for (var i = 0; i < 10; i++) {
//           console.log(fibonacci(i));
//         }
//         if (n <= 1) {
//           return n;
//         } else {
//           return fibonacci(n - 1) + fibonacci(n - 2);
//         }
//       }

// function fibonacci(num) {
//           let num1 = 0;
//           let num2 = 1;
//           let sum;
//           let i = 0;
//           for (i = 0; i < num; i++) {
//               sum = num1 + num2;
//               num1 = num2;
//               num2 = sum;
//           }
//           return num2;
//       }

//       console.log("Fibonacci(5): " + fibonacci(10));
//       console.log("Fibonacci(8): " + fibonacci(10));

// for(var i=100;i>=0;i--){
//     var prime = false;
//     for(var j = i-1;j<i.length;j--){
//         if(i%2 ===0 && i!==j){
//             prime = true;
//         }
//     }
//     if(prime === false){
//         console.log(i)
//     }
// }

// var str = "this is laptop"
// var arr = []
// for(var i=0;i<str.length;i++){
//     arr += str[i]
//     console.log(str)
// }

// let array = "create a @ number (hi) # with * 1232 ,,, 5585645 javascript";
// let specialcarrector = "1234567890,! @ # $ % ^ & * ( ) - _ = + \ | { } ; : / ? . >"
// var filter ="  "
// for(var i=0;i<=array.length -1;i++){
//     var match = false
//     for(var j=0;j<specialcarrector.length;j++){
//         if(array[i] == specialcarrector[j] ){
//             match = true

//         }
//     }
//     if(match === false){
//         filter += (array[i])

//     }

// }
// console.log(filter)

// sum =0
// for(var i=0;i<=100;i++){
//     var prime = true;
//     for(var j =2 ;j<=i;j++){
//         if(i%j==0 && i!==j){
//             prime =false
//         }

//     }
//     if(prime = true){
//         sum += i
//         console.log(sum)
//     }
// }

// var arr = [1,2,3,4,5,6]
// var max =0;
// for(var i =0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }

// }
// console.log(max)

// for (var i = 0; i <= 100; i++) {
//   var notprime = true;
//   for (var j = 2; j <= i; j++) {
//     if (i % j === 0 && j !== i) {
//       notprime = false;
//     }
//   }
//   if ((notprime = true)) {
//     console.log(i);
//   }
// }

var sum = 0;
for (var counter = 0; counter <= 100; counter++) {
  var notPrime = false;
  for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    sum += counter;
    console.log(sum, counter);
  }
}
