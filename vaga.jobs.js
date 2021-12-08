const main = (params) => {
    var Teste = 'abcdefghijklmnopqrstuvxz'
    var Text = ''

    for(var i = 0; i < 10000; i++){
        const numero = Math.floor(Math.random()* Teste.length)
        Text += Teste.substring(numero, numero+1);
    }
    return Text
}

console.log(main())