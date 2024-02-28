function romannumber(s) {
  const mymap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  let result = 0;
  for (var i = 0; i < s.length; i++) {
    var  curr = mymap[s[i]];
    var  next = mymap[s[i + 1]];
    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }
  return result;
}
var roman = prompt("Please enter the roman number")
var integer = romannumber(roman)
console.log(integer)
