function wordtextcount() {
  var arr = "this is book";
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
    } else count++;
  }
  console.log(count);
}
wordtextcount();
