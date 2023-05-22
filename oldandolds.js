const ages =[1,2,3,4,5,6,7,8,910,32321]
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)
console.log(twoOldestAges)