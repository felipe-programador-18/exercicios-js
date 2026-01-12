const buscarMeuUser = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
           resolve({id:1, nome:'felipe ultimo dev 2026'}) 
        },1000)
    })
}


async function buscandoEle (){
    try {
        const user = await buscarMeuUser();
        console.log(user);
        
    } catch (error) {
        console.log('erro na busca do usuário.', error)
    }
}

//buscandoEle();


//Exercício 8 — Validação assíncrona

//Crie uma função validarIdade(idade) que:

// Aguarde 1 segundo

//Retorne "Acesso permitido" se idade ≥ 18

//Lance um erro caso contrário

//Use async/await e trate o erro adequadamente.

const validarIdade= (idade) =>{

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(idade >= 18){
                resolve('Acesso permitido')
            } else {
                reject(new Error('Acesso negado - menor de idade'))
            }
        },4000)
    })
}


async function validandoIdade (idade){
    try {
        const valite = await validarIdade(idade)
        console.log('testando',valite)
        
     } catch (error) {
        console.log('erro na validade de idade ')//
        return error 
    }
}
//(validandoIdade(10))


const Produtos=[{id:1 ,nome:'notebook', preço:99},{id:2,nome:'smartphone', preço:500},{id:3,nome:'tablet', preço:300},{id:4,nome:'monitor', preço:200},{id:5,nome:'fones de ouvido', preço:10},{id:6,nome:'teclado mecânico', preço:150}]
const MyProducts = Produtos.filter((item) => item.preço >=100).map((item) =>{
    return {produto:item.nome, valor:item.preço}
})

//console.log('lançando meus produtos ',MyProducts)

const RecebendoProdutos =(MyProducts) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MyProducts)
        },5000)
    })
}

async function MostrandoProdutos(MyProducts){
    try {
        const MostrandoEles = await RecebendoProdutos(MyProducts)
        return MostrandoEles;  
    } catch (error) {
        console.log('erro ao mostrar produtos', error)
    }
}

//MostrandoProdutos(MyProducts).then((respostas) =>{
  //  console.log('meus produtos recebidos ', respostas )
//})




let MyUsers=[{id:1,nome:'felipe', pedidoPrato:'hamburguer vegano', valor:45, pedidoBebida:'heineken', outrovalor:16 },{id:2,nome:'martins', pedidoPrato:'pizza brocolis', valor:60, pedidoBebida:'coca-cola', outrovalor:6 },{id:3,nome:'julia', pedidoPrato:'sushi vegano', valor:80,pedidoBebida:'coca-cola', outrovalor:6},{id:4,nome:'ana', pedidoPrato:'salada completa', valor:30, pedidoBebida:'coca-cola', outrovalor:6},{id:5,nome:'carlos', pedidoPrato:'lasanha vegetariana', valor:70,pedidoBebida:'coca-cola', outrovalor:6}]

const Umpedidoporvez= MyUsers.map((item) =>{
    return {cliente:item.nome, pedido:item.pedidoPrato, beber: item.pedidoBebida, valorUni1:item.valor, valorUnitwo: item.outrovalor, valorTotal: item.valor + item.outrovalor}
})

const ValorDeTodosPedidos = Umpedidoporvez.reduce((acumulador, itens) =>{
    return acumulador + itens.valorTotal
},0)

console.log('pedidos dos clientes', Umpedidoporvez)
//console.log('o valor total de todos os pedidos é deR$:', ValorDeTodosPedidos)

function RecebendoPedidos (ValorDeTodosPedidos){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(ValorDeTodosPedidos)
        }, 3000)
    })
}

async function MostrandoPedidosPausados(ValorDeTodosPedidos){
     try {
        const see = await RecebendoPedidos(ValorDeTodosPedidos)
        return see
        
     } catch (error) {
        console.log('erro ao mostrar os pedidos', error)
     }
}

MostrandoPedidosPausados(ValorDeTodosPedidos).then((resposta) =>{
    console.log('o valor de todos os pedidos e de R$:', resposta)
})



let UsersId =[{id:1, nome:'Felipe martins', age:30}, {id:2, nome:'Aprovado', age:25},
{id:3, nome:'bartolomeu', age:20 }]

const AdmDates = UsersId.map((item) => {
    return {pegaId:item.id, pegaNome:item.nome, pegaAge:item.age}
})


//console.log('testando meu item aqui', AdmDates)

function ManageMyser(AdmDates){
    
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(AdmDates)
        })
    })
}

async function ControlandoMyManageUser(AdmDates) {
  for (const dados of AdmDates) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(dados)
  }
}



ControlandoMyManageUser(AdmDates).then((resposta) =>{
       console.log("aqui tem minha respostas", resposta)
})