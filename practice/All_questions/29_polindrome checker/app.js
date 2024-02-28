function checkPalindrome(string) {
  //this on string length
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
     console.log("this is on check for length ====",i)
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      // this is on return a not poidrome
      return "It is not a palindrome";
    }
  }
  // this on return  polidrome
  return "It is a palindrome";
}
// take input
const string = "madam"
// call the function
const value = checkPalindrome(string);

console.log(value);
