// practice about spring operator!!

const human = {
    name: 'Programmer',
    sobrename: 'martins',
    age: 26
}

const Together = {...human, email:'machadofelipe2016@outlook.com', ...human}
Together.celular = '9-89530193'

console.log(Together)