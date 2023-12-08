var string ="1,2,4,6,8"
var replace = string.replaceAll(",","");
//console.log(replace)
var addingcommastring = "";
for(var i=0; i<replace.length; i++){
          console.log("------",string[i])
          addingcommastring += string[i]
          console.log(addingcommastring)
          
}
