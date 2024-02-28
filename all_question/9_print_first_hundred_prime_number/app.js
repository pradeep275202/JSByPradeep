// print first hundred prime number 
function primenumber(k){
  for(var i = 2; i<k; i++){
      if(k % i === 0){
          return false;
          
        
      }
  }
  return true;  
}
for(i=0;i<=100;i++){
  if(primenumber(i)){
      console.log(i)
  }
}