var sum = 0;
for (var i = 0; i <= 100; i++) {
  var notprime = false;
  for (var j =2; j<=i; j++) {
    if (i%j===0 && i!==j) {
      notprime = true;
    }
  }
  if (notprime === false) {
    sum += i;
  }
  console.log(sum, i);
}
