function fibonacci(num) {
          let num1 = 0;
          let num2 = 1;
          let sum =0;
          let i = 0;
          console.log('num1 ', num1);
          console.log('num2 ', num2);
          for (i = 0; i <= num; i++) {
            console.log('-------inside loop------')
              console.log(sum)
              sum = num1 + num2; // 1 + 2 = > 3 
                                 // 
              console.log('num2 ', num2);
              num1 = num2; // =>1
              num2 = sum; // => 2
              console.log(num1, num2)
          }
          
          return num2;
      }
      
      console.log("Fibonacci(10): ", fibonacci(10));
      