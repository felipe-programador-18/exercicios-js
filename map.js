
const kinda = [21,323,12,1,23,455,100]

const Test = kinda.map(function(item) {
     return {more: item * 2}
})

console.log(kinda,Test)