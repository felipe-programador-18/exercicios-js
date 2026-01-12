function contarNumero (number){
    let contador=number

    return function (){
        contador++
        return contador
    }

}
const recebendoNumero= contarNumero(5)
const recebendoNumero2=contarNumero(6)
console.log(recebendoNumero(), recebendoNumero2())



function TesteMultplicador(multiplicador){
    let numero= multiplicador

    return function (){
        numero++
        return numero*2
    }
}

const TesteMyNumero = TesteMultplicador(3)
const OutroNumero= TesteMultplicador(4)
console.log(TesteMyNumero(),OutroNumero())

var funcoes = [];

for (let i = 0; i < 3; i++) {
  funcoes.push(function () {
    console.log(i);
  });
}

//funcoes[0]();
//funcoes[1]();
//funcoes[2]();

function SaldoBancario (meuSaldo){
    let VerMoney= meuSaldo
    
   return {
      verMeuSaldo: function(){
        return `Meu saldo é ${VerMoney}`
      },   
      queroDepositar: function(meuValor){
        VerMoney += meuValor
        return `Depositando um valor de ${VerMoney}`
      },
      sacar: function(valor) {
            if (valor > VerMoney) {
                return "Saldo insuficiente!";
            }
            VerMoney -= valor ;
            return `Sacado: R$ ${valor}`;
        }
      

    }


}

const Meusaldo = SaldoBancario(10)
// console.log(Meusaldo())


const MyDados =[{id:1, nome:'felipe', apelido:'pe de anjo', sobrenome:'eu vou vencer'}]

const Recebendo = MyDados.map((item) => {
  return{
    ...item,
    pegaItem: `pega meu apelido ${item.apelido}, ${item.nome}, ${item.id}`
  }
})

console.log(Recebendo)