function negative() {
  var arr = [1, 2, -3, -5, -2, 10, 0, -20];
  var filternegative = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      filternegative.push(arr[i]);
    }
    
  }
  console.log(filternegative)
}
negative();
