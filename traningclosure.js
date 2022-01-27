//practice more and more closure and method of javascript!!

function Traning (nome){
    const count = 0

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
