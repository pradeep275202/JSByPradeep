var arr = [1, 1, 2, 5, 5, 5, 5, 5, 2, 3, 3];
function removeDublicateArr(data) {
  let shortedArr = [];
  for (let i = 0; i < data.length; i++) {
    let isMatch = false;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] == data[j]) {
        isMatch = true;
      }
    }
    if (isMatch == false) {
      shortedArr.push(data[i]);
    }
  }
  console.log(shortedArr);
}

removeDublicateArr(arr);

