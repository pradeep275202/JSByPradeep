// var arr = [1,2,3,0,4,45,5-3,-2,5,-10]
// var filterarr = []
// for(var i=0;i<=arr.length;i++){
//           if(arr[i] >= 0){
//                     filterarr.push(arr[i])
//                     console.log(filterarr)

//           }
// }

// give me negative number

var arr = [1, 2, 3, 0, 4, 45, 5 - 3, -2, 5, -10];
var filterarr = [];
for (var i = 0; i <= arr.length; i++) {
  if (arr[i] <= 0) {
    filterarr.push(arr[i]);
  }
  
}
console.log(filterarr);
