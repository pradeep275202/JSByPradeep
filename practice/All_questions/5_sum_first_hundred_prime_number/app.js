var sum = 0;
for (var i = 0; i <= 100; i++) {
  var notprime = true;
  for (var j = 2; j<=i; j++) {
    if (i % j === 0 && i !==j) {
      notprime = false;
    }
  }
  if (notprime === true) {
    sum += i;
  }
  console.log(sum, i);
}
