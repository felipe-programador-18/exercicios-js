

let names = 'phrases here é É now brow'

let regex = /[a-z]|é/gi;

const manage = names.match(regex)
console.log(manage)


// just play with number here

let LemmeKnow = 'the main reaons is now bro'
let filterKnow = /[^a]/g;

const manageAll = LemmeKnow.match(filterKnow)
console.log(manageAll)