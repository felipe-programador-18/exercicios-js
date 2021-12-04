const CalJuros = (c,i,T) =>{
    c= 1000
    i=0.50
    T=24 
    Montante = c*(1+i)*T
    console.log(Montante)
    Juros = Montante - c
    console.log(Juros)
}
// i taxa
// T tempo mes ou ano
// C capital
// J juros

CalJuros()