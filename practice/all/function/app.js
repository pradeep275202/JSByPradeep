/*  // use for loop in function and print 1 to 100 number
function number() {
          for(i=0;i<100;i++)
          console.log(i)
          
}
number()

// print 100 to 1 number
function numbers() {
          for(i=100;i>0;i--)
          console.log(i)         
}
numbers()
// print sum numbers in function
function sum(){
          for(i=0;i<100;i++)
          if (i%2==0) {
                    console.log(i)                    
          }
}
sum()  

function array(){
          var a =[1,2,3,4,5,6,7,8,9]
          reverce=[]
          for(i=a.length-1;i>0;i--){
                    reverce.push(a[i])

          }
          console.log(reverce)
}
array()  */

function string(){
          var str = "this is a laptop"
          reverce = ""
          for(i=str.length-1;i>0;i--){
                    reverce += str[i];
          }
          console.log(reverce)
}
string()