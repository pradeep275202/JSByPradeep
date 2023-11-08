let object = {
         firstname:"aashish",
          village:"dullahpur",
          age:"32"
          
}
console.log("object is :", object)
console.log("object is name :" ,object.firstname)
console.log("object is village :",object.village)
console.log("object is  age :",object.age)
// add the object
object.lastname= "kumar"
console.log("add the new word in object",object)

// delete the object
delete object.age
console.log("delete key word age in object :",object)

// upgrade one object
object.name="ram"
console.log("accse ram key in objects :",object)

 /*for(let master in object){
    

          console.log('master',master)
      
  }
  console.log(Object.keys(object)[1]); */

  for(i=0;i<100;i++){
          console.log(i)
  }
  
  

