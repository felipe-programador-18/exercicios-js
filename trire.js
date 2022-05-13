//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
//filter here now

const Filerer = function(item){
    return item % 2 === 0
}
const Vector = [12,21,3,43,123,4545,23,2,24,24,424,242,42].filter(Filerer)
const VerifyOnlyPeer = (a,b) => a+b
const BeSmarter = Vector.reduce(VerifyOnlyPeer)
console.log(`testing all code only sum peer ${BeSmarter}`)


// seems is same filter, but another way
const Vetor = [10,20,343,3,4]
const Ehpeer = num => num % 2 === 0
const Peer = Vetor.filter(Ehpeer)
const PureFuncion = (a,b) => a+b
const AnotherWay = Peer.reduce(PureFuncion)
console.log(`interpolation string verify another way to make same code filter ${Peer}, and see another reducer of another way ${AnotherWay}`)







