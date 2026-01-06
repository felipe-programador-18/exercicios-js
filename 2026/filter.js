// praticando um pouco para soltar a lógica da cabeça

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Praticando = numeros.filter(num => num %2 === 0);
console.log("praticando e treinando um pouco" + Praticando);


const imparesss = numeros.filter(num => num %2 !== 0);
console.log('voltando a pensar um pouco na lógica'+ imparesss)

const felipemartios= [18,20,19,10,9,8]
const recebe= felipemartios.filter(item => item >=18)
console.log(recebe)


const produtos = [
  { nome: "Teclado", estoque: 10 },
  { nome: "Mouse", estoque: 0 },
  { nome: "Monitor", estoque: 3 },
  { nome: "Cabo", estoque: 0 }
];

const pensando = produtos.filter(newprodutos => newprodutos.estoque > 0);
const nuvem = produtos.filter(marcas  => marcas.nome !== "Teclado")
console.log(pensando, nuvem);


const positivo= [-10,-4,-3,4,3,5,6];

const FicaApenasPositivo = positivo.filter(newpositivo => newpositivo >=0);
console.log(FicaApenasPositivo);


const Usuário = [{ nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: false },
  { nome: "Beatriz", ativo: true },
  { nome: "João", ativo: false }]
  
const ApenasPositivo = Usuário.filter(user => user.ativo === true)  

console.log(ApenasPositivo)


const nomes = ["Ana", "Bruno", "Alice", "Carlos", "Amanda",'alice','andressa'];

const TestNome = nomes.filter(newname => newname.startsWith('A'));
const Othername= nomes.filter(newothername => newothername.toLowerCase().startsWith('a') !== newothername.startsWith('A'));
console.log(TestNome);
console.log('testando ' + Othername)