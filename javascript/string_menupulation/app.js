// string length -- he provide me length
var stringlength = "abcdefghijklmnopqrstuvwxyz"
console.log(stringlength.length)

// string slice 
var a = "this is laptop"
console.log(a.slice(1,3))

//string substring
let b = "this is unknow"
console.log(b.substring(2,8))

//String substr
let c = "this is your problem"
console.log(c.substr(2))

//Replace -- replace the word "this" to "He"
let d = "this is invalid age"
console.log(d.replace("this","he"))

//Replace all -- thats repalce "a" to "e" in this line
let e = "thats your age"
console.log(e.replaceAll("a","e"))

// ToUpperCase -- he give me capital letters  
let f = "this is car"
console.log(f.toUpperCase())

// ToLowerCase -- thats give me lower letter
let g = "this is car"
console.log(g.toLowerCase())

//string concat -- add togather numbers
let h = "Ram"
let i = "Shyam"
let j = h.concat(" ",i)
console.log(j)

// string trim 
let k = "         this is for you"
console.log(k.trim())

// string trim start
let l = "         this is for you"
console.log(l.trimStart())

// string trimEnd
let m = "         this is for you        "
console.log(m.trimEnd())

//string split
let n = "thats your thinking"
console.log(n.split(""))

// indexof
let o = "this is your pen"
console.log(o.indexOf("is"))

// lastindexof
let p = "thats your basic problem"
console.log(p.lastIndexOf("basic"))

// string search
let q = "The rain in SPAIN stays mainly in the plain"
console.log(q.search("/ain/"))

// string Match
let r = "this is match "
console.log(r.match("is"))

// string MatchAll
let s = "this is match"
console.log(s.matchAll("s"));

// string inclueds
let t = "this is unbelevel"
console.log(t.includes("is"))

// start with
let u = "he in unbelevel"
console.log(u.startsWith("he"))
console.log(u.startsWith("he,6"))

// Ends with
let k1 = "this is not bad"
console.log(k1.endsWith("bad"))

// string padstart
let m1 = "5";
console.log(m1.padStart(10,"j"))

// string padend
let a1 = "20";
console.log(a1.padEnd(10,"k"))