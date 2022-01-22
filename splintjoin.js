const name = 'martins'
// the command splint he breaking the words in various piece!!
console.log(name.split(' '))

const Sobrename = 'Felipe Programer'
console.log(Sobrename.split(' ').join(' <==> '))


const tenure = ['Programing', 'thouhgt']
console.log(tenure.join(` ${Sobrename } `))


const More =(item) => {
    return item < 200
}

const String = '+'

const together = [123,123,3123,123,1231,231].filter(More)
console.log(together.join(` ${String} `))

const Union = (one, two) => one +two
const CaughtMe = together.reduce(Union)
console.log(CaughtMe)
