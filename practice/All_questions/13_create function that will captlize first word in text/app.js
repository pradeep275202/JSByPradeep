var str = "this is a book"
var words = str.split(" "); // ["this","is","a","book"]
var captlize =" ";
for(var i=0;i<words.length;i++){
          //console.log(i)
          captlize += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " "

}
console.log(captlize)
