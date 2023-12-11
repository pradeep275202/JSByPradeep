// Array length -- he give me array length
let a = [1,2,3,4,5,6,7,8,9]
console.log(a.length)

// To string -- this give me a string of array
let b = ["ram","shyam","arun"]
console.log(b.toString())

// Array Pop() -- this bring last word in array
let c = [11,12,13,14,15,16,17,18,19]
console.log(c.pop())
console.log(c)

// Array Push() -- this method add in last array line
let d = ["cow","got","parrot"]
console.log(d.push("sheep","cats"))
console.log(d)

// Array Shift() -- this method bring first word in array
let e = ["dom","rom","shom"]
console.log(e.shift())
console.log(e)

// Array unshift() -- this method add first word in array
let f = [1,2,3,4,5,6,7,8,9,0]
console.log(f.unshift(11))
console.log(f)

// Array join() -- this method join array word middile
let g = [11,12,13,14,15,16,17,18,19]
console.log(g.join("k " ))

// Array delete -- puchna hai
delete g[0]
console.log("g: ",g)





// Array concat -- this method adding aray
let h = ['A',"B","C","D","E","F","G","H","I","J","K","L","M","N"]
let i =["O","P","Q","R","S","T","U","V","W","X","Y","Z"]
console.log(h.concat(i))

// Array flat -- puchna hai
let j = [1,2,3,4,5,[6,[7,8,9]]]
console.log(j.flat())
console.log(j)

// Array splice -- splice"
let week = ["sunday","monday","tuesday","wednesday","thursday","friday"]
console.log(week.splice(0,0,'saturday'))
console.log(week)

// Araray slice method ---
let month =["jan","feb","mar","apr","may","jun"]
console.log(month.slice(2,40))


