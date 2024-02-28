function distance(x1,y1,x2,y2){
          const dx = x2-x1
          const dy = y2-y1
          return Math.sqrt(dx*dx+dy*dy)

}
const distanceBeetweenPoints =distance(10,5,8,10)
console.log(distanceBeetweenPoints)