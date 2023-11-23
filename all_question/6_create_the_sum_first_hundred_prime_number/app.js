// create the first hundred prime number
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 1 && i % 3 == 1 && i % 5 == 1) {
    console.log(i);
  }
}
