const legKind = ['batata','cebola','ovo','azeitona','tomate', 'tomate', 'tomate']
const seperateLeg = (one,two) =>{
    if(!one[two]){
        one[two]={
            create: one,
            createnew: 0
        }
    }
      one[two].createnew = one[two].createnew+1
      return one
}

const seeFood =  legKind.reduce(seperateLeg,{})
console.log(seeFood)
const key= Object.keys(seeFood)
console.log(key)
const filterMore = legKind.filter(a => seeFood[a].createnew ===1)
console.log(filterMore)


