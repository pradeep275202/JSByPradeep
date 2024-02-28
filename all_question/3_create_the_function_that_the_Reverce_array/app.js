// use function and reverce array
function revercearray() {
          const array = [1,2,3,4,5,6,7,8,9];
          const reverce = []
          for(i=array.length-1;i>=0;i--){ // lenght(9)-1=8(index value) index[8]=9
                    reverce.push(array[i])
                    
          }
          console.log(reverce)
                   
}
revercearray()

