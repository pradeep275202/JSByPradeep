var string ="1,2,3,4,5";
var number = string.split(',');
console.log("this is number ==",number)
var addingcommastring =0;
for(var i=0; i<=number.length -1; i++){
         console.log("number string value ==",number[i])
          addingcommastring += number[i]
           console.log(addingcommastring)
          
 }

