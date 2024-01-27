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
