// for (var i = 0; i <= 100; i++) {
//          var notprime = true
//   for (var j = 2; j <= i; j++) {
//     if (i%j==0 && i !==j) {
//       notprime == false;
//     }
//   }
//   if(notprime == true)
//   console.log(i)
// }


// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//   var notprime = false;
//   for (var j =2; j<=i; j++) {
//     if (i%j===0 && i!==j) {
//       notprime = true;
//     }
//   }
//   if (notprime === false) {
//     sum += i;
//   }
//   console.log(sum, i);
// }


// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//   var notprime = false;
//   for (var j =2; j<=i; j++) {
//     if (i%j===0 && i!==j) {
//       notprime = true;
//     }
//   }
//   if (notprime === false) {
//     sum += i;
//   }
//   console.log(sum, i);
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