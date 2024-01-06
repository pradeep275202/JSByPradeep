var array = [1,22,44,2,66,8,9,10]
 var binary = 9;
 for(var i=0;i<array.length/2;i++){
          console.log(array[i])
           if(array[i] === binary){
                     console.log("true")
           }else{
                     console.log("false")
          }
           let halfarray = array/2
          for(var f = array.length/2;f<=(array).length;i++){
                    console.log(array[f])
                    if(array[f] === binary){
                              console.log("this is binary search " ,f)
                    }
          }
}          