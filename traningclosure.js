//practice more and more closure and method of javascript!!
// theorical closure serve to adding and change values !!

function Traning (nome){
    let count = 0
    return {
        getCount : function(){
             return count 
        }
        ,
       getIncrement : function(){
            count++
        },
       getName: function(){
           return nome
       } 
    }
}
const sobrename = Traning('Programmer')
sobrename.getIncrement()
console.log(sobrename.getCount(), sobrename.getName())

const anothername = Traning('Felipe')
anothername.getIncrement()
console.log(anothername.getCount(), anothername.getName())

const Otherkind = Traning('Felipe')
Otherkind.getIncrement()
console.log(Otherkind.getCount(), Otherkind.getName())