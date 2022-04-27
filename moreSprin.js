//practice more about spring operator!

const Employer = {
    name:"Felipe Martins Programador",
    salario: 20000,
    endereco: 'Balneario Camburio 92192'
}

const addingInformation = {...Employer, conjuge:'casado com loira', ...Employer }
console.log(addingInformation)