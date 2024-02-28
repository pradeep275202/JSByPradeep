var array = "create a @ number (hi) # with * 1232 ,,, 5585645 javascript";
let specialcarrector = "1234567890,! @ # $ % ^ & * ( ) - _ = +  | { } ; :";
var filter = [];
for (var i = 0; i < array.length; i++) {
  var match = true;
  for (var j = 0; j <= specialcarrector.length; j++) {
    if (array[i] == specialcarrector[j]) {
      match = false;
    }
  }
  if (match === true) {
    filter.push(array[i]);
  }
}
console.log(filter);
