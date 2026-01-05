// praticando um pouco para soltar a lógica da cabeça

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Praticando = numeros.filter(num => num %2 === 0);
console.log("praticando e treinando um pouco" + Praticando);


const imparesss = numeros.filter(num => num %2 !== 0);
console.log('voltando a pensar um pouco na lógica'+ imparesss)

const felipemartios= [18,20,19,10,9,8]
const recebe= felipemartios.filter(item => item >=18)
console.log(recebe)