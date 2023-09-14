
// problem no - 1

let str ="har\""
console.log(str)
console.log(str.length)


// problem no - 2

const sentence ='the quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`the word "${word }" ${sentence.includes(word)? 'is': 'is not'} in the sentence`);


// problem no - 3


 let wor = "ram";
 console.log(wor.toLowerCase())
 console.log(wor.toUpperCase())

 let text = "Hello World!";
 let result = text.toUpperCase();

 // problem no - 4

 let start = "please give rs 100"
 let amount = Number.parseInt
   (start.slice(15))
   console.log(amount)
   console.log(typeof amount)

 // problem no- 5
 
 let friend = "deepika"
 friend[3] = "R"
 console.log(friend)  // friend is not change, because string is immutable