 // random number......
// create the random number
var randomnumber = Math.random()
console.log(`random number =`,randomnumber)

// use the floor
console.log(`use the floor =`,Math.floor(Math.random()))

// generate the 0 to 9 number 
console.log(Math.random()*10)

// generate the 1 to 10 number and use the floor
console.log(Math.floor(Math.random()*10)+1)

//generate the 5 digit number
console.log(Math.floor(Math.random()* (99999-10000+1)+10000))

// generate the 10 digit number
console.log(Math.floor(Math.random()*(9999999999-1000000000)+1000000000))

// generate the 2 digit number 
console.log(Math.floor(Math.random()*(99-10)+10))

// use the abs object
console.log(Math.abs(Math.random()*(99-10)+10))   

// use the Ln2
//console.log(Math.LN2(Math.random()*10))  



// Math.round object in js (yah object hme 5.5 hone par 6 
// value dega aur 5.3 hone par 5 value dega)
var x = Math.round(5.2)
console.log(x)



// Math.ceil object in js point me koe bhi value hone
// ke baad yah hme point ke phle value ka next value print karega
let a = Math.ceil(5.2)
console.log(a)




// Math.tunc object
// yah object hme point ke baad ka vlue ko nahi print karta hai
// point ke phle diye gae number ko print karta hai
var b = Math.trunc(2.5)
console.log(b)



// Math.pow object 
// yah hme kisi bhi power value deta hai
var m = Math.pow(10,5)
console.log(m)


// Math.squrt object
// yah me kisi bhi sankhya ka squre ka value deta hai
var k = Math.sqrt(100)
console.log(k)



// Math.min object
// yah hme sankhyao ke samhu me se sabse minimum sankhya deta hai
var z = Math.min(12,22,2,23,45,66,667,11,16)
console.log(z)



// Math.max object
// yah hme maximum number deta hai
var r = Math.max(1,2,3,4,5,6,7,8,9,19,15,3333)
console.log(r)


