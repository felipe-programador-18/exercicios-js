const vector = ['felipe','programmer','felipe','martins','felipe']

const separeteVegal = (a,b) => {
   if(!a[b]){
       a[b]={
          val: a,
          newval :0 
       }
   }
   a[b].newval = a[b].newval +1
   return a
}

const Pega = vector.reduce(separeteVegal, {})
console.log(Pega)
const keymore = Object.keys(Pega)
console.log(keymore)

const lire = vector.filter(one => Pega[one].newval === 1)
console.log(lire)



let newSpace = ''
for(var i=0; i<11; i++){
    newSpace = newSpace+i
}
console.log('practice little bit for', newSpace)


var PraticandoMais= ''
for(var i=1; i<12; i++){
    PraticandoMais= PraticandoMais+i
}


console.log(`Colocando a mão na massa ${PraticandoMais}`)