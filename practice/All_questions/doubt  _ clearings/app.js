// for(var i=0;i<=100;i++){
//           var notprime = false
//           for(var j=2;j<=i;j++){
//               if(i%j===0 && j!==i){
//                   notprime = true
//               }
//           }
//           if(notprime == false){
//               console.log(i)
//           }
//       }

// var arr = [1, 2, 5, 7, 9, 10];
// var arr1 = [44, 5, 3, 2, 11];
// var newarr = []
// for (var i = 0; i <= arr.length; i++)

//   for (var j = 0; j <= arr1.length; j++) {

//         if (arr[i] != arr1[j])
//             return false

//     // If all elements were same.
//     return true
// }

//
// function fibonacci(n) {

//         for (var i = 0; i < 10; i++) {
//           console.log(fibonacci(i));
//         }
//         if (n <= 1) {
//           return n;
//         } else {
//           return fibonacci(n - 1) + fibonacci(n - 2);
//         }
//       }

// function fibonacci(num) {
//           let num1 = 0;
//           let num2 = 1;
//           let sum;
//           let i = 0;
//           for (i = 0; i < num; i++) {
//               sum = num1 + num2;
//               num1 = num2;
//               num2 = sum;
//           }
//           return num2;
//       }

//       console.log("Fibonacci(5): " + fibonacci(10));
//       console.log("Fibonacci(8): " + fibonacci(10));

// for(var i=100;i>=0;i--){
//     var prime = false;
//     for(var j = i-1;j<i.length;j--){
//         if(i%2 ===0 && i!==j){
//             prime = true;
//         }
//     }
//     if(prime === false){
//         console.log(i)
//     }
// }

// var str = "this is laptop"
// var arr = []
// for(var i=0;i<str.length;i++){
//     arr += str[i]
//     console.log(str)
// }

// let array = "create a @ number (hi) # with * 1232 ,,, 5585645 javascript";
// let specialcarrector = "1234567890,! @ # $ % ^ & * ( ) - _ = + \ | { } ; : / ? . >"
// var filter ="  "
// for(var i=0;i<=array.length -1;i++){
//     var match = false
//     for(var j=0;j<specialcarrector.length;j++){
//         if(array[i] == specialcarrector[j] ){
//             match = true

//         }
//     }
//     if(match === false){
//         filter += (array[i])

//     }

// }
// console.log(filter)

// sum =0
// for(var i=0;i<=100;i++){
//     var prime = true;
//     for(var j =2 ;j<=i;j++){
//         if(i%j==0 && i!==j){
//             prime =false
//         }

//     }
//     if(prime = true){
//         sum += i
//         console.log(sum)
//     }
// }

// var arr = [1,2,3,4,5,6]
// var max =0;
// for(var i =0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }

// }
// console.log(max)

// for (var i = 0; i <= 100; i++) {
//   var notprime = true;
//   for (var j = 2; j <= i; j++) {
//     if (i % j === 0 && j !== i) {
//       notprime = false;
//     }
//   }
//   if ((notprime = true)) {
//     console.log(i);
//   }
// }

// var sum = 0;
// for (var counter = 0; counter <= 100; counter++) {
//   var notPrime = false;
//   for (var i = 2; i <= counter; i++) {
//     if (counter % i === 0 && i !== counter) {
//       notPrime = true;
//     }
//   }
//   if (notPrime === false) {
//     sum += counter;
//     console.log(sum, counter);
//   }
// }

// sum = 0
// for(var i=0;i<=100;i++){
//   var notprime = false;
//   for(var j=2;j<i;j++){
//     if(i%j===0 && i!==j){
//        notprime = true;
//     }
//   }
//   if(notprime === false){
//      sum += i
//     console.log(i,sum)
//   }
// }

// var arr = [1,2,3,4,5]
// var sum =0
// for(var i=0;i<arr.length;i++){
//   sum += arr[i]

// }
// console.log(sum)
// var average = sum/arr.length
// console.log(average)

// var arr =[1,434,33,65,32]
// var max = 0;
// for(var i=0;i<arr.length;i++){
//   if(arr[i]>max){
//     max = arr[i]
//   }

// }
// console.log(max)

// var str = "this is laptop"
// var reverce =" "
// for(var i=str.length-1;i>=0;i--){
//   reverce +=(str[i])
// }console.log(reverce)

// function textcount(){
//   var str = "this is a laptop and this is a man"
//   var count =0;
//   for(var i=0;i<str.length;i++){
//     if(str[i] == " "){
//     }else count++
//   }
//   console.log(count)
// }
// textcount()

// var str = "this is a laptop and this is a watch"
// var strings =str.split(" ")
// console.log(strings)
// var capTilizedstr = " ";
// for(var i =0;i<strings.length;i++){
//   capTilizedstr += strings[i].charAt(0).toLocaleUpperCase() + strings[i].slice(1)+ " ";
// }
// console.log(capTilizedstr)

// var str ="1,2,3,4,5"
// var strings = str.split(',')
// var addingcommastring;
// for(var i=0;i<=strings.length-1;i++){
//           addingcommastring += strings[i]
// }
// console.log(addingcommastring)

// print fibonacci seres 10 time

// function fibonacci(num){
//   let num1 = 0;
//   let num2 = 1;
//   let sum;
//   for (var i = 0; i < num; i++) {
//     sum = num1 + num2; // 0+1
//     num1 = num2; // 1
//     num2 = sum; // 1
//   }
//   return num2;
// }
// console.log("this on print 10 time fibbonzcci number ",fibonacci(10));

// var arr1 = BigInt("1213243543545235432543546423454")
// var arr2 = BigInt("3453653426546543457864645455842")
// var arr3 = arr1 + arr2
// var arr4 = arr3.toString()
// console.log(arr4,typeof arr4)

// var array = "create a @ number (hi) # with * 1232 ,,, 5585645 javascript";
// let specialcarrector = "1234567890,! @ # $ % ^ & * ( ) - _ = +  | { } ; :";
// var filter = [];
// for (var i = 0; i < array.length; i++) {
//   var match = false;
//   for (var j = 0; j < specialcarrector.length; j++) {
//     if (array[i] == specialcarrector[j]) {
//       match = true;
//     }
//   }
//   if (match === false) {
//     filter.push(array[i]);
//   }
// }
// console.log(filter)

// function distance(x1,y1,x2,y2){
//       const dx = x2-x1
//       const dy = y2-y1
//       return Math.sqrt(dx*dx + dy*dy)
// }
// const distanceBeetweenTwoPoints= distance(10,5,8,10)
// console.log(distanceBeetweenTwoPoints)

// var arr = [1, 2, 4, 3, 2, 1];
// var filterarr = [];
// for (var i = 0; i < arr.length; i++) {
//   var match = true;
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       match = false;
//     }
//   }
//   if (match == true) {
//     filterarr.push(arr[i]);
//     console.log(filterarr);
//   }
// }

// for (var i = 0; i <= 100; i++) {
//   var a = false;
//   for (var j = 2; j <= i; j++) {
//     if (i % j === 0 && i !== j) {
//       a = true;
//     }
//   }
//   if (a === false) {
//     console.log(i);
//   }
// }

// var str = "this is laptop"
// var string = str.split(" ")
// var captlize =" "
// for(var i=0;i<str.length;i++){
//       captlize +=string[i].charAt(0).toUpperCase() + string[i].slice(1) + " "
//       console.log(captlize)
// }

// function fibonacci(num) {
//   var num1 = 0;
//   var num2 = 1;
//   var sum;
//   for (var i = 0; i < num; i++) {
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//   }
//   return num2;
// }
// console.log(fibonacci(10));

// var arr1= BigInt("4564457412254877454754547522473545")
// var arr2 = BigInt("585438674653453486764467835486467")
// var arr3 = arr1+arr2;
// var arr4 = arr3.toString();
// console.log(arr4,typeof(arr4))

// var word = "this is laptop and this is a computer"
// var withoutspacing = " "
// for(var i=0;i<word.length;i++){
//       if(word[i] == " "){
//       }
//       else withoutspacing++
// }
// console.log(withoutspacing)

function fibonacci(num) {
      let num1 = 0;
      let num2 = 1;
      let sum;
      for (var i = 0; i < num; i++) {
          sum = num1 + num2;
          num1 = num2;
          num2 = sum;
      }
      return num2;
    }
    
    console.log("Fibonacci serese 10 time ===: ",fibonacci(10));
    
