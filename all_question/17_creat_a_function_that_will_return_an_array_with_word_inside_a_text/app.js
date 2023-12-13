let array = "create a @ number (hi) # with * 1232 ,,, 5585645 javascript";
let filter = "";
for (var i = 0; i < array.length; i++) {
  let check = isincludes(array[i]);
  
  if (check == false) {
    filter += array[i];
  }
}
 console.log(filter);
function isincludes(data) {
  let regex = ["@", "(", ")", "#", "*", "", ",", ".", "$"];

  return regex.includes(data);
}
