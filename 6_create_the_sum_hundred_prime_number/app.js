function primenumber(){
          for(i=0;i<=100;i++)
          if(i%2==0 && i%3==0){
                    break;
          }
          else if(i%5==0 && i%7==0){
                    break;
                    
          }else{
                    console.log(i)
          }
}
primenumber()