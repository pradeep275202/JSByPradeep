var name = 'anil';
                     //0, 1, 2, 3,  4 ,   5,         6   // lenght =>
let marks_class_12 = [9, 82, 63, 55,36,false,"notpresent"];
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])
console.log(marks_class_12[7]) // will be undefined because index does not exit

console.log("the lenght of marks_class_12",marks_class_12)

marks_class_12[6] = 80 // adding a new value tonthe array
marks_class_12[0] = 96 // chnging vaalue of an array

console.log(marks_class_12)
console.log(typeof marks_class_12);
