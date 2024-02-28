// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }
// truncateString("A-tisket a-tasket A green and yellow basket", 8);

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
  console.log(str);
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
