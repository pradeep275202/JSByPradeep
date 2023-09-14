//  7 types primitive data types in js

// nn bb ss u -primitives in js

let a = null ;
let b = 345 ;
let c = true ; //can also be false 
let d = BigInt("567") + BigInt("3")
let e = "harry"
let f = Symbol("i am a nice symbol")
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof c)


// object in js - non primitive data types

const item ={
          "harry": true,
          "shubh":false,
          "lovish":67,
          "rohan":undefined
}
console.log(item["shubh"])