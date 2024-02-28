var prime = function (){
          var num = 0;
          for (num = 0; num < 100; num++){
              if (num % 2 === 0){
                  break;
              }
              else if (num % 3 === 0){
                  break;
              }
              
              else if (num % 5 === 0){
                  break;
              
              }
              else if (num % 7 === 0){
                  break;
              
              }
              else if (num % 11 === 0){
                  break;
              
              }
              else {
                  return num;
              }
          }
          };
          console.log(prime());
          