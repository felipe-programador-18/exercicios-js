const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]
const howMuchILoveYou= (n)  => {
     return phrases[(n - 1) % phrases.length] 
}

const howThought = howMuchILoveYou(1)
console.log(howThought)
