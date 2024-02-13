function selectionSort(array) {
  // yha par first loop start hoga aur array ke length tak chalega
  for (let i = 0; i < array.length; i++) {
    // yha par minIndex ki value array ki index ki value ke barabar hoga
    let minIndex = i;
    // yha par second loop start hoga aur jo ki j ki value array ki index
    // value me 1 add karke start hoga loop
    for (let j = i + 1; j < array.length; j++) {
     // yha par esa condition hai jo array ki j value aaray ki minIndex 
     // value se bada hoga     
      if (array[j] > array[minIndex]) {
      // yha par jab uper ka conditon shi hoga uske baad minIndex ki value 
      // j ki value ke barabar hoga    
        minIndex = j;
      }
    }
    // yha par esa condition hai jo minIndex ki value i ke value ke barbar n ho
    if (minIndex !== i) {
    // yha par aaray ki index value aur aaray ki mindex value == array ki mindex value
    // aur array ki index value dono trph ke value barbar hone chahiye      
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

const array = [5, 3, 2, 1, 4];
console.log(selectionSort(array));
