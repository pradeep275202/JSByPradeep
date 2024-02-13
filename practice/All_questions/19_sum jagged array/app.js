// let array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
// let max = 0;
// function maxNumber(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       maxNumber(array[i]);
//     } else {
//       if (array[i] > max) {
//         max = array[i];
//       }
//     }
//   }
// }
// maxNumber(array);
// console.log(max);

// let array = [2,4,11,[15,3,5,[55,3,6,],44,55],66,88];
// let sum = 0;
// function maxNumber(array){
//   for(let i=0;i<array.length;i++){
//     if(Array.isArray(array[i]));{
//       sum(array[i])
//     } else {

//     }

//  }
//}

function sumArray(ar) {
  let sum = 0;

  for (let el of ar) {  
    if (Array.isArray(el)) {
      el = sumArray(el);
    }
    sum += el;
  }

  return sum;
}
console.log(sumArray([1, 2,6 ,[15,66 ,[23,55], [5, 12],33], [100],22]));
