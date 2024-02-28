function divisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    console.log("this number is divisible by x and y");
  } else {
    console.log("this number is not divisble x and y");
  }
}
divisible(50, 5, 2);
