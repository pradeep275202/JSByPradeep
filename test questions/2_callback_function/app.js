function greate(name,callback){
          console.log('hi' + '' +name)
          callback()
}
function callme(){
          console.log('I am call back function')
}
greate('peter',callme)