const obj = {
    name:'martins',
    sobrename: 'felipe',
    city:'porto alegre'
}


// traning about destructing assisment!!
const {name, sobrename} = obj
console.log(obj.name, sobrename)



const vetor = ['martins', 'without','avoid', 'eagers']
const [subvetor] = vetor
console.log(vetor.subvetor)