const usuarios = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 25 },
  { nome: 'Carla', idade: 30 }
];

const RecebendoUsers = usuarios.map((item) =>{
    return item.idade >=18 ? {nome:item.nome, idade:item.idade, status:'é maior de idade'} : {nome:item.nome, idade:item.idade, status:'é menor de idade'}
})

usuarios.forEach(RecebendoUsers => {
    return RecebendoUsers.idade >= 18 ? console.log(`${RecebendoUsers.idade}  é maior de IDADE`) : console.log(`${RecebendoUsers.nome} é menor de IDADE `);
});

console.log('meus usuarios com status de idade', RecebendoUsers)
