// Date object
var newdate = new Date()
console.log(newdate)

//Time
var date = new Date()
console.log("Hour:min ==",date.getHours(),":",date.getMinutes())

// set time and date
var setdate = new Date("1905,4")
console.log(setdate)

// year,month,date,hour,minute,second
var ym = new Date("2029,05,15,4:5:45")
console.log(ym)


// get Full year
var fullyear = new Date()
console.log(fullyear.setFullYear(1983))