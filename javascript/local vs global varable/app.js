var number = 110;        //global variable

setTimeout(() =>{
          function add(){
                    let name = "aashish"  // local variable
                    let add = name
                    return add;

          }
          console.log(add());
},5000)
console.log(name)