const obj = {
    var1:10,

    get : function (){
     return this.var1
    }
}

console.log(obj.get.bind({var1: '70'}) ())



//this code turned in object in other obj using command bind
let thought = {
    var2: 20,

    struggling : function(){
        return this.var2
    }
}

console.log(thought.struggling.bind({var2:'50'}) ())



const mother= {
   var12 : 12,

   caught : function(){
       return this.var12
   }
}

console.log(mother.caught.bind({var3:'4324'}) ())