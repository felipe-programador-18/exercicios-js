const take = function(item){
    return item <20
}
// remember about filter!!!
const winter = [1,23,4,5,676,8,19].filter(take)
console.log(winter)


const Setup = function(item){
    return item <50
}

const guidance = [32,43,12,32,49.9].filter(Setup)
console.log(guidance)
