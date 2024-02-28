// confirmEnding("Bastian", "n");
// function confirmEnding(str, target) {
//   var newStr = '';

//   newStr = str.substring(str.length - target.length);

//   return newStr === target;

// }

// confirmEnding("Bastian", "n");

function end(str, target) {
  var start = str.length - target.length;
  if (str.substr(start, str.length) == target) {
    return true;
  } else {
    return false;
  }
}
end("Bastian", "n");
