const str = "this is my school";
const arr = str.split(" ");
let capitalizedArr = " ";
for (var i = 0; i < arr.length; i++) {
       //console.log(i)
  capitalizedArr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
   //console.log(arr[i]);
}
console.log(capitalizedArr);
