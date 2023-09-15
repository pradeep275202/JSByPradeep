 // use  to string

let num = [1,2,3,34,4]
let b = num.toString() // b is a string

// use join method

console.log(b, typeof b)
let c = num.join(" and  ")
console.log (c, typeof c)

// use pop method

let r = num.pop() // pop returns the poped element
console.log(num,r)
let k = num.push(56) // push returns the way  length
console.log(num,k)

// use shift method

let a = num.shift()
console.log(a,num) // remove an element from the start of thr array

// use unshift method

let d = num.unshift(78)
console.log(d,num)