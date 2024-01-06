var arr = [1, 1, 2, 5, 5, 5, 5, 5, 2, 3, 3];
function removeDublicateArr(data) {
  let shortedArr = [];
  for (let i = 0; i < data.length; i++) {
    let isMatch = true;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] == data[j]) {
        isMatch = false;
      }
    }
    if (isMatch == true) {
      shortedArr.push(data[i]);
    }
  }
  console.log(shortedArr);
}

removeDublicateArr(arr);

var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

console.log(arr1,arr2,arr3)