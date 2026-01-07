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

buscandoEle();


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
(validandoIdade(10))


const Produtos=['notebook','smartphone','tablet','monitor','fones de ouvido','teclado mecânico']
const MyProducts = Produtos.map((item, index) =>{
    return {itemId:index +1, itemName:item}
})

// console.log('lançando meus produtos ',MyProducts)

const RecebendoProdutos =(MyProducts) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MyProducts)
        },10000)
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

MostrandoProdutos(MyProducts).then((resposta) =>{
    console.log('meus produtos recebidos ', resposta)
})

