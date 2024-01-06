function negativenumber(){
          var arr = [1,2,3,4,5,6,7,-1,-2,-3,-4,-5]
          negnum = [];
          for(var i=0;i<arr.length;i++){
                    if(0<arr[i]){
                              negnum.push(arr[i])
                    }
                    
          }
          console.log(negnum)
}
negativenumber()