var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7];
var filterarr = [];
for (var i = 0; i <= arr.length; i++) {
  var notmatch = true;
  for (var j = i + 1; j <= arr.length; j++) {
    if (arr[i] == arr[j]) {
      notmatch = false;
    }
  }
  if (notmatch == true) {
    filterarr.push(arr[i]);
  }
}
console.log(filterarr);
