for (i = 0; i <= 100; i++) {
  var prime = true;
  for (j = 2; j <= i; j++) {
    if (i % j === 0 && i !== j) {
      prime = false;
    }
  }
  if (prime == true) {
    console.log(i);
  }
}
