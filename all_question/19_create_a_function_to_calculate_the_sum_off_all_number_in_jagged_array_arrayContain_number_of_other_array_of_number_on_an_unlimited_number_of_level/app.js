function jagged(){
         var jaggedArray = [1,2,3,4,[2,34,[2,432,[44,4,55,33],4234,34],656,44,],1,24,,6,8,8];
         var array =Array.isArray(jagged)
          var sum = 0;
          for (var i = 0; i < array.length; i++) {
                    //console.log("this is jagged index value ===",i)
            for (var j = 0; j <= array[i].length; j++) {
                  console.log("this is j value ==",array[j])     ;
              sum += jaggedArray[i][j]
              //console.log(sum)
              
            }
            //console.log("jagged array === ",jaggedArray[j])
            //console.log(sum)
          }
          console.log("this is sum value ==",sum)
}
jagged()