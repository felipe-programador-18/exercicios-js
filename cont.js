// here i am training about context and command bind

const thuoght = {
    var1 : 30,

   get: function(){
       return this.var1
   } 
}

console.log(thuoght.get.bind({var1:60}) ())



const Nchangename = {
    varone2: 1000,

    caught: function(){
        return this.varone2
    }
}
// With this command i get change value of variable uses bind!!!
console.log(Nchangename.caught.bind( {varone2:23}) ())