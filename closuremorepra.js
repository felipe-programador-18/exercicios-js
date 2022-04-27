//practing about closure!!!
//remember always very interesting
//I Create function that receive one parameter out and later caught parameter inside out!!!
function caughtAnimal (animal){
    let countname = 0
    return {
        getCount: function(){
            return countname
        },
        getIncrement : function (){
            return  countname ++
        },
        getNamename : function (){
            return animal
        }
    }
}

const Name = caughtAnimal('dog')
Name.getIncrement()

const Prefered = caughtAnimal('Cat')
Prefered.getIncrement()
console.log(Prefered.getCount(), Prefered.getNamename(), Prefered.getCount(), Prefered.getNamename())

console.log(Name.getCount(), Name.getNamename(),)
