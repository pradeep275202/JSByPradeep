// if and else statement

let a = prompt ("hey whats your age?");
a = Number.parseInt(a); // conversion the string to  a numer

if(a<0){
          alert("this is an invalid age");
}
else if (a<9){
          alert("you are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
          alert("you are kid and you think of driving after 18");
}
else{
          alert("you can now driving as are above 18");
}
console.log("Done")
console.log("you can", a < 18? "not drive" : "drive")