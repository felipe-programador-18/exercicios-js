
const kinda = [21,323,12,1,23,455,100]

const Test = kinda.map(function(item) {
     return {more: item * 2}
})

console.log(kinda,Test)


const Together = [1,2,3,4,5,6]

const list = Together.map(function(item) {
   return  {caught:`<li>  ${item*2} </>`} 
})

console.log(list)