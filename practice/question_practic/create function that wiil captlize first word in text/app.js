var str = "this is laptop"
var word = str.split(" ")
var captlize = " ";
for(var i=0;i<word.length;i++){
          captlize += word[i].charAt(0).toUpperCase() +word[i].slice(1) + " "

}
console.log(captlize)