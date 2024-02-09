var str ="1,2,3,4,5"
var number = str.split(',')
var addingcommastring = 0;
for(var i =0;i<number.length;i++){
          addingcommastring += number[i]
}
console.log(addingcommastring)