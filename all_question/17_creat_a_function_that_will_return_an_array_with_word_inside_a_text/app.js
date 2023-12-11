/*function text(){
          var string = "create a @ number (hi) # with * javascript"
          var array = [];
          for(var i = 0;i<=string.length;i++){
                    if(i===lo)
                    array.push(string[i])
                    console.log(array)
          }
          return (array)
}
text()  */
function filter(){
          var string = "(hii) this # is@  laptop"
          var filter = [];
          for(var i=0;i<string.length;i++){
                    if (string[i] === "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ ") {
                              filter.push(string[i])
                              console.log(i)
                    }
          }
}