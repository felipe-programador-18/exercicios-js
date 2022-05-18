console.log(Array.from('foo'))
console.log(Array.from([1,2,3,4,5,6,], x => x**2))


const set = new Set(['foo', 'bar', 'baz', 'foo']);
 console.log(Array.from(set))

const repeat = new Set(['martins','martins','programmer','thought',1,2,1]) 

console.log(Array.from(repeat))