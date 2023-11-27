const nestedobject={
          name:"kanhaiya",
          age:55,
          address:{
                    Village:"nayakdih",
                    Post:"hardashpur",
                    Distic:"ghazipur",
                    state:"Uttar pradesh",
                    brothers:{
                              youngbrother:"ram",
                              middilebrother:"shyam",
                              elderbrother:"kashyap",
                              sisters:{
                                        firstsister:"rani",
                                        secondsister:"sanjana",
                                        thirdsister:"ritika"
                              }


                    }

          }
}

console.log("nestedobject = ",nestedobject)


//accese the key of value
var objects=nestedobject.address.brothers.sisters
console.log(objects)
