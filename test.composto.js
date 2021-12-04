const CalJuros = (c,i,T) =>{
     Montante = c*(1+i)*T
     Juros = Montante-c
     console.log(Juros) 
}



CalJuros()
const Soma = CalJuros(100,5.43,24,(Montante-100))
console.log(Soma)

// i taxa
// T tempo mes ou ano
// C capital
// J juros

//console.log(Montante)
//Juros = Montante - c
//console.log(Juros)

//c= 1000
//i=0.50
//T=24 
CalJuros()