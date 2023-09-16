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


// ***** Not equal to != *****
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

// *****strict equal to *****
// -----first exmple ----

let strict = 80;
let strict1 = 80;
let strict3 = strict === strict1
console.log(" value is strict3 = ",strict3)

// ---- second example ----

let se = 20;
let se1 = 30;
let se3 = se === se1
console.log("value is se3 = ",se3)

// ---- third example ----

let th = 70;
let th1 = 40;
let th2 = th === th1
console.log("value of th2 = ", th2)

// **** strict not equal ****
//---- first example ----

let notstrict = 40;
let notstrict1 = 50;
let notstrict3 = notstrict !== notstrict1
console.log("not strict value is = ",notstrict3 )

// ---- second example ----

let ns = 90;
let ns1 = 90;
let ns2 = ns !==  ns1
console.log("value of ns2 = ", ns2)

// ---- third example -----

let thi = 50 ;
let thi1 = 40 ;
let thi2 = thi !== thi1
console.log("value of thi2 = ", thi2)

//    ***** Greater than > ******
// ---- first example ----

let greater = 50;
let greater1 = 60;
let greater2 = greater1 > greater
console.log(" value of greater1 > greater = ", greater2)
let greater3 = greater > greater1
console.log("value of greater1 > greater =", greater3)

// ----- second example ----

let great = 30;
let great1 = 20;
let great2 = great > great1
console.log("value of great > great1 = ", great2)
let great3 = great1 > great
console.log("value of great1 > great = ", great3)

//   ***** - Less than < *****
// -----first example -----

let less = 40;
let less1 = 41;
let less2 = less < less1
console.log("value of less > less 1 = ",less2)
let less3 = less1 > less 
console.log("value of less1 > less = ",less3)

// ----- SECOND EXAMPLE -----

let les = 50;
let les1 = 20;
let les2 = les1 < les 
console.log("value of les1 < les ", les2)
let les3 = les < les1
console.log("value of les > les1 ", les3)

//   ----Greater than or equal to >= ----
//   ---- first example ----

let equal = 100;
let equal1 = 50;
let equal2 = equal >= equal1
console .log("value of equal >= equal1 = ", equal2)
let equal3 = equal1 >= equal
console.log("value of equal1 > equal = ", equal3)

// ---- second example ----

let eq = 50;
let eq1 = 60;
let eq2 = eq1 >= eq
console.log("value of eq1 > eq = ", eq2)
let eq3 = eq >= eq1
console.log("let eq >= eq1 = ", eq3)

//  ---- Less than or equal to <= ----
// ----- first example ----

let eqa = 40;
let eqa1 = 50;
let eqa2 = eqa1 <= eqa
console.log("value of eqa <= eqa1 =", eqa2)
let eqa3 = eqa1 <= eqa
console.log("value of eqa3 = ", eqa3)

// ----- second example ----

let equ = 100;
let equ1 = 100;
let equ2 = equ <= equ1
console.log("value of equ2 = ", equ2)
let equ3 = equ1 <= equ
console.log("value of equ3 = ",equ3) 




















