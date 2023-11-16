// date object
//var newdate = new Date()
//console.log(newdate)

// time
//var Date= new Date();
//console.log("get Hour:Min = ",Date.getHours(), ":",Date.getMinutes())
var ym = new Date("2006 04 22 04:30")

// set time and date
// two parameter is must
// year month date hour minute second milisecond
var setdate = new Date("1996 05")
console.log("Day:Month:Date:Year = ",setdate)

// year,Month,Date,Hour,Minute,Second,milisecond print this type
var ym = new Date("2006 04 22 04:30:05")
console.log(ym)

// get Fullyear
let Fullyear = new Date()
console.log(Fullyear.getFullYear()-5)