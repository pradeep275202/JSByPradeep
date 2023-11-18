// travelling element child elemenht
const travelelement = document.getElementById("ram")
console.log(travelelement)

// parent element change
const li = travelelement.parentElement
console.log("==this is parent element ==", li)
// const l1 = li.innerHTML=("this is change element")
// console.log(l1)
li.innerHTML=("this is change element")


// select using sibling element

const parentelement = document.getElementById("shyam")
console.log("this is the parent element",parentelement)


// firstchild element
const firstchild = parentelement.firstElementChild;
console.log("this is first child",firstchild);


//select using last child
const lastchild = parentelement.lastElementChild;
console.log("this is last child =",lastchild);

//select all child using parent
const child = parentelement.children;
console.log(child)

for(let data of child){
          data.computedStyleMap.color ="red"
}