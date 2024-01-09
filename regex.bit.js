// to practice a  bit about regex


const b = /ab+c/
const manage = new RegExp("abc")

console.log(manage)




var regex = /hello/i;
var str = 'Hello World';

console.log(regex.test(str));




// to testing if the letter G == global


let phrase = /e/g
const manageAll = 'the best way to go their É'

const ThoughtBro = new RegExp(manageAll)

//console.log(phrase(manageAll))



// TO PAY ATTENTION ABOUT THIS SMALL STRUCTURE OF CODE!
// BASICAMENTE O REGEX NESSE CASO QUANDO EU PRECISE BUSCAR VIA SEARCH DIGITANDO ELE NÃO DISTINGUE POR 
// LETRAS MAISCULAS OU MINUSCULAS

//const photos = await PhotoUser.find({title: new RegExp(q,'i')}).exec()
  //console.log('my photos here', photos)


// this is very simple 
let Myname = 'i have to typing this teto to see my reaction, texto, texto'
let phrasees = /texto/g
const makehappen = Myname.match(phrasees)

console.log(makehappen)


// let do more one testing here now!



let EmailMore = 'machadofelipe2016@outlook.com'
let Caught = /e/i;

const MakeFunny = EmailMore.match(Caught)
console.log(MakeFunny)




let LemmeSeeEmail = /@/g
let TestEmail = 'machadofelipeoutlookcom'

const Deeply = TestEmail.match(LemmeSeeEmail)
console.log(Deeply)



// for now testing my test

let NameFelipe = 'felipe'
let regex = /felipe/g;
let dispacthMore =  regex.test(NameFelipe);

console.log(dispacthMore)