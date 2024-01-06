function filter(){
          const array = [1,2,-3,4,-5,6,-7,8,-9];
          const filternumber =[];
          for(var i=0;i<array.length;i++){
                    if(array[i]>=0){
                              filternumber.push(array[i])
                             

                     }
          

          }
          console.log(filternumber)
}
filter()