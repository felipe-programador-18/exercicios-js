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

MostrandoProdutos(MyProducts).then((respostas) =>{
    console.log('meus produtos recebidos ', respostas )
})


