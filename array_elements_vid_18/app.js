let num = [1,2,3,4,5,6,7,8,9]
let num_more = [11,12,13,14,151,16,17,18,19]
let num_even = [211,212,213,214,215,216,416,417,418,419]
console.log(num.length)
delete num[0]
console.log[num.lenghth]

// use the concat

  let newArray = num.concat(num_more, num_even)
  console.log(newArray)
  console.log(num, num_more)

// sort method

let compare = (a,b) =>{
          return a-b
}
let number = [551,22, 3,14, 5, 6,7,8,229]
number.sort(compare)
number.reverse()
console.log(number)

// splice and slice

let num1 = [551,55,22,1,14,15,6,7,8,229]
let deletevalues = num1.splice(2,4,102,122,1022,1024,1025)
console.log(num1)
console.log(deletevalues)
let newnum = num1.slice(3)
let newnumber = num1.slice(3,5)
console.log(newnumber)
