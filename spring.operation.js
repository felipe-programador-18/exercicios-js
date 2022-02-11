//practice little bit about spring operation!!!
// this is advantege!!
// this is very intructive

const pesssoa = {
    name: 'Martins',
    Sobrename: 'Progamer18',
    idade: 18,
    cidade: 'Porto alegre'
}

const caught = {...pesssoa, email:'machadofelipe2016@outlook.com', ...pesssoa}
caught.idade = 50
console.log(pesssoa)
console.log(caught)


const test = {
    aluno: 'Beatriz',
    matricula: 32133,
    age: 20
}
const together = {...test , gender: 'female', ...test , numero:989530198, adress:'avenida circular 921'}
together.age = 100

console.log(test)
console.log(together)


const Accountbanc = {
    Nuser: 1893213,
    Nauser:'Programer Martins',
    adress:'florianopolis'
}

const Nubanck = {...Accountbanc ,  local:'avenida das naçoes', ...Accountbanc }
Nubanck.valor = 20000

console.log(Nubanck)
