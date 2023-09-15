 //  2 .assigment operator
// first example

var a = 20;
var b =30;
console.log("a before:",a)

a = b;
console.log("a after",a)

// second example

let assigment = 50;
let assigment1 = 100;

 assigment1 = assigment;
 console.log(assigment)

assigment = assigment1;
console.log(assigment)

//  - Additional assigment +=

             // ---first example ----

var a = 20;
var b = 11;
const c = a + b
console.log('c :', c)
const add3 = a += b;
console.log('add3 :', c)

console.log('string concatination :', a + '20')

             // ---- second example ----

var a1 = 10;
var b1 = 20;
var c1 = 30;

var d = a1 + b1 + c1
console.log("value d", d)

var d1 = d += c;
console.log("value of d1",d1)
console.log("string concatination :",d1 + "50")
console.log(typeof d1)

            // -----  third example ----

let x = 50;
let y = 60;
let z = 70;
let k = 80;
var xyzk = x + y + z + k
console.log("value of x + y + z + k =",xyzk)

k1 = x += y;
console.log("value of x += y = ",k1)
console.log("string concation : ", k1 + "50")

            // ---- fourth example ----

let num = 100;
let num1 = 50;
let number = num + num1
console.log("num + num1 = ",number)

let number1 = num += num1;
console.log("value of num += num1=",number1)
console.log("string concation :",number1 + "100")

            // ---- five example ----

let j = 1;
let k2 = 2;
let k3 = 3;
let k4 = 4;
let addk1 = j + k2 + k3 + k4
console.log(addk1)   

let addk2 = j += k2 += k3 +=k4
console.log("value of j += k2 += k3 += k4=",addk2)
console.log("string concation :",addk2 + "5")

//    - Subtraction Assignment -=

           // ---- firt example ---

var c1 = 15;
var c2 = 20;

console.log('without sub-assignment', c2 - c1);
console.log('using sub-assignment', c2 -= c1);


              // ---- second example ----

 let n = 50 ;
 let n1 =100;
 
 console.log("without sub-assigment",n - n1)
 console.log("using sub-assigment",n1 -= n)

 //    - Multiplication Assignment *=

 // ---- first example ----
 
var num2 = 12;
var num3 = 30;

console.log('without mul-assignmet', num2 * num3)
console.log('with mul-assignmet', num2 *= num3)

// ---- second example ----

var k1 = 20;
var m=k2 = 20;

console.log('without mul-assignmet', k1 * k2)
console.log('with mul-assignmet', k1 *= k2)

//    - Division Assignment /=
// ---- first example ----

var divisison = 5;
var divisison1= 2;

console.log('wihtout div-assignemt ', divisison / divisison1)
console.log('with div-assignemt ', divisison /= divisison1)

 //  ---- second example ----

var divisison3 = 9;
var divisison4 = 10000000000;

console.log('wihtout div-assignemt ', divisison3 / divisison4)
console.log('with div-assignemt ', divisison3 /= divisison4)


//    - Modulus Assignment %=

//   ---- first example ----

var modu = 11;
var modu1 = 2;

console.log('wihtout div-assignemt ', modu % modu1)
console.log('with div-assignemt ', modu %= modu1)

// ---- second example ----

var modu3 = 51;
var modu4 = 2;

console.log('wihtout div-assignemt ', modu3 % modu4)
console.log('with div-assignemt ', modu3 %= modu4)

// 3. ----**Comparison Operators**: ----
// ----first example----

var comparison = 50;
var comparison2 = 31;

//    - Equal to ==
var comparison3 = comparison == comparison2;
console.log('comparison3 :', comparison3)


//    - Not equal to !=
var comparison4 = comparison != comparison2;
console.log('comparison4 :', comparison4)

// ---- second example ----

let compa = 60;
let compa1 = 60;

//    ---equal to ==
let compa2 = compa == compa1
console.log("compa2",compa2)

// ---- not equal to != ----
let compa3 = compa != compa1
console.log("compa3",compa3)
















