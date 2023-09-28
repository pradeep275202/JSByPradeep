 //print number 1 to 100

 for (let i=0;i<=100;i++)
 {
     console.log(i)
 }

 //print 1 t0 100 even number

 for (let k=0;k<=100;k++){
     if (k%2==0){
         console.log(k)
     }
 }

 //print 1 to 100 odd number

 for(let x=0;x<=100;x++){
     if (x%2==1){
         document.write(+" "+ x + "<br>")
     }
 };


 //print reverce array

var z = [1, 2, 3, 4, 5, 6,7,8,9]
let revers = []
for (let x = z.length - 1; x >= 0; x--) {
    revers.push(z[x]);
}
console.log(revers);



