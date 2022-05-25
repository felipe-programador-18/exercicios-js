const petalis = [ 'I love you',
'a little',
'a lot',
'passionately',
'madly',
'not at all',]

const itWorks = (a) => {
  return petalis[(a-1) % petalis.length ]
}

const calledFun = itWorks(1)
console.log(calledFun)



let acs = 50%3
console.log(acs)