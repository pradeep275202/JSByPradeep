function selectionSort(array) {
  // this on strt loop
  for (let i = 0; i < array.length; i++) {
    // yha par minIndex ki value array ki index value ke barbar hoga 
    let minIndex = i;
    // yha par second loop start hoga aur j ki value array ki index value
    //me hmesa 1 add karke print karega 
    for (let j = i + 1; j < array.length; j++) {
      // yha par esa condition diya gya hai jo array ki j value se array ki
      // minIndix value bda tab yah conditon chalega
      if (array[j] < array[minIndex]) {
      // agr uper vala condition shi ho tho minIndex ki value array ke
      // j value ke barabar hona chahiye  
        minIndex = j;
      }
    }
    // yha par esa condition hai jo minIndex ki value array ke index value 
    // ke barabar nhi ho
    if (minIndex !== i) {
      // yha par array ki index value aur array ki minIndex value == 
      // aaray ki mindex value aur array ki index value dono barbar hona chahiye 
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

const array = [5, 3, 2, 1, 4];
console.log(selectionSort(array));
