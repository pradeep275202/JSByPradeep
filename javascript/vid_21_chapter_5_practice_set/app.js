// problem no - 1

  let arr = [1,2,3,4,5,6,7,8,83]
  let a = prompt("enter a number")  
  a = Number.parseInt(a)
  arr.push (a)
  console.log(arr)

//  //practice problem no -2

   let arr1 = [1,2,3,4,5,6,7,83]
   let b;
   do{
           b = prompt ("enter a number ")
           b = Number.parseInt(b)
           arr1.push(b)  
   } while(b != 0);
   console.log(arr1)

// practice problem no - 3

  let arr2 = [1,2,30,4,50,6,7,8,9,83,670]
  let  n = arr2.filter((x) =>{
            return x % 10 ==0
  })
  console.log(n)

//  //practice problem no- 4

  let arr3 = [1,2,30,4,50,6,7,83,679]
  let k = arr3.map((x) => {
       return  x*x;

  })
 console.log(k)

// practice problem no - 5

 let arr4 =  [1,2,3,4,5,6,7]
 let  l = arr4.reduce((x1,x2) =>{
           return  x1*x2
 })
 console.log(l)