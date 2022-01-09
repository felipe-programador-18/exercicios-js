const objeto = {
    name: 'Felipe',
    sobrename: 'martins',
    age: 26,
    city:'Porto alegre',
    stage: 'Rio Grande Do Sul'
}


console.log(`My name is  ${objeto.name} and i have ${objeto.age} years, currently I living
in the city ${objeto.city} that stay in ${objeto.stage} and avoid in that ${objeto.sobrename}`)




const Teste = function(item) {
    return item <100
}

const Mother = [12,1212,343,12,23,55,123].filter(Teste)

console.log(Mother)