var jaggedArray =[1,2,[1,2,[1,2,[1,2,3,4],3,4],3,4],3,4,5]
var array = Array.isArray(jaggedArray)
var sum =0;
if(Array.isArray(jaggedArray)){
          for(var i=0; i<jaggedArray.length;i++){
                    sum += jaggedArray[i]
                    console.log(jaggedArray[sum])
          }
}
