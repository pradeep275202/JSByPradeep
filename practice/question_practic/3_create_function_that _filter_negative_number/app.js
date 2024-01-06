function filternegative(){
          var arr = [1,2,3,4,5,6,7,-1,-2,-3,-4,-5]
          filtneg = [];
          for(var i=0;i<arr.length;i++){
                    if(arr[i]>0){
                              filtneg.push(arr[i])
                    }
                    
          }
          console.log(filtneg)
}
filternegative()