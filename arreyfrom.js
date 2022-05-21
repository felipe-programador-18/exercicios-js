console.log(Array.from('foo'))
console.log(Array.from([1,2,3,4,5,6,], x => x**2))


const set = new Set(['foo', 'bar', 'baz', 'foo']);
 console.log(Array.from(set))

const repeat = new Set(['martins','martins','programmer','thought',1,2,1]) 

console.log(Array.from(repeat))


const Lemme = (str) => {
    let ondarry = Array.from(str)
    let youngerry = []
    for(var i=0; i< ondarry.length; i++){
        youngerry.push(ondarry[i].repeat(2))
        
    }
    console.log(youngerry.join(''))
   
}
let save = Lemme('fee')
console.log(save)