const papel = "juiz";
const fase = "julgamento";

const mensagem =
  (papel === "juiz" && fase === "julgamento")
    ? "Você pode emitir a sentença."
    : (papel === "advogado" && fase === "instrução")
      ? "Você pode apresentar suas alegações finais."
      : (papel === "servidor" && fase === "análise")
        ? "Organize os autos para análise inicial."
        : "Aguardando ação.";

console.log("Mensagem:", mensagem);

const outraMensagem= "eu vou ser aprovado";
const OutraMensagem = "eu vou dar o meu melhor"

let OutroResultado;
if(outraMensagem === "eu vou ser aprovado" && outraMensagem ==="Eu vou dar o meu melhor"){
    OutroResultado= "eu vou ser aprovado"
}else if(outraMensagem==="vc precisa estudar mais" && OutraMensagem ==="se vc não estudar mais, não vai ser aprovado"){
    OutroResultado ="quais os motivos que não está estudando mais..."
}else if(outraMensagem === "eu vou vencer na vida!!" && OutraMensagem === "É obvio que vai, vai ser duro, mas TU VAI CONSEGUIR"){
  OutroResultado ='Parabens, vc virou quem chorou para ser'
}else {
  OutroResultado= 'estude mais, se esforce mais, e vc vai conseguir chegar onde quer chegar!!'
}

console.log('resultado',OutroResultado)



const objetoss ={teste:'felipe', sobrenome:"martins"}
const toStrinnng = JSON.stringify(objetoss)
console.log('toString',toStrinnng)



const array = ["T", "R", "F", 1]
// o comando splice eu dois  argumentos para definir a posição do elemento e o número de elementos a serem removidos, e depois os elementos que eu quero adicionar, no caso eu quero adicionar o simbolo ">" na posição 0, sem remover nenhum elemento, por isso o número de elementos a serem removidos é 0.
array.splice(0,0,'>')
console.log(array.filter(v=>!!v)) 




// praticando um pouco para prova de concurso Público!!
const PraticandoParaserAprovado = "eu vou ser aprovado";
const PraticandoParaserAprovado2 = "eu vou dar o meu melhor";
let salveMessage;

if(PraticandoParaserAprovado === "voce precisa estudar mais" && PraticandoParaserAprovado2 ==="voce precisa se esforçar mais"){
     salveMessage="voce precisa ficar muito bem em TI MANÉ"
}else if (PraticandoParaserAprovado ==="estudando pouco" && PraticandoParaserAprovado2 === "se esforçando pouco"){
  salveMessage='voce não vai ser aprovado, precisa estudar mais'
}else{
  salveMessage='se esforce mais, e vc vai conseguir chegar onde quer chegar!!'
}
// console.log('salveMessage', salveMessage)


const FazendoAmesmacoisa = 'euvou ser aprovado'
const FazendoAmesmacoisa2 = 'eu vou dar o meu melhor'


const AdminstrandoAmesmacoisa = 
(FazendoAmesmacoisa === "euvou ser aprovado" && FazendoAmesmacoisa2 ==='eu vou dar o meu melhor')
? "Parabéns, voce estou muito e precisa seguir estudando muito para ser aprovado" :
(FazendoAmesmacoisa ==="estudando pouco" && FazendoAmesmacoisa2 ==='eu não estou dando o meu melhor')
? "tu deseja ser aprovado e não da o seu melhor, precisa se esforçar mais"
:(FazendoAmesmacoisa==="continue a estudar mais" && FazendoAmesmacoisa2 ==='continue a se esforçar mais')
 ? "se esforce mais que vc vai conseguir chegar onde quer chegar !!" 
 : "finalizando o comando"


 //console.log('outro jeito de chamar if e else', AdminstrandoAmesmacoisa)




const age= 10
const MageneAge = (age >= 18 && age <21) ?
"voce pode votar e não pode se candidatar a senador, porem pode se canditar a vereador" :
( age >30 && age < 35) ? "voce pode se canditar a senador, mas não pode se canditar a presidente" :
(age >= 35) ? "voce pode se canditar a presidente do brasil, desde que seja brasileiro NATO" : 
(age >21 && age <30) ?'voce apenas pode votar e pode concorrer ao cargode vereador e deputado por ter mais de 21 anos' :
"voce não pode votar e nem se canditar a nenhum cargo, pois é menor de idade"

console.log('eu posso votar e concorrer para qual cargo ?', MageneAge)



