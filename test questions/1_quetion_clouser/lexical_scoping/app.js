function outer(){
          let username ="hitesh";
          function inner(){
                    let secret = "my123"
                    console.log("inner",username)
          }
          function innerTwo(){
                    console.log("innerTwo",username);
                    console.log(secret);
          }
          inner();
          innerTwo();
}
outer()