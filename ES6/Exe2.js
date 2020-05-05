
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const IdadeUsuarios = usuarios.map(function(item) {
    return item.idade
});

console.log(IdadeUsuarios);


const MaiorQue18 = usuarios.filter(function(item){
    return item.idade > 18
})

console.log(MaiorQue18)

const TrabalhaComGoogle = usuarios.find(function(item){
    return item.empresa === 'Google'
})

console.log(TrabalhaComGoogle)


const IdadeDobrada = IdadeUsuarios.map(function(item){
    return item * 2
})

const MenorQue50 = IdadeDobrada.filter(function(item){
    return item <= 50
})

console.log(MenorQue50)

const IdadeUsuarios = usuarios.map(item => item.idade);

console.log(IdadeUsuarios);


const MaiorQue18 = usuarios.filter(item => item.idade > 18)

console.log(MaiorQue18)

const TrabalhaComGoogle = usuarios.find(item => item.empresa === 'Google')

console.log(TrabalhaComGoogle)


const IdadeDobrada = IdadeUsuarios.map(item => item * 2)

const MenorQue50 = IdadeDobrada.filter(item => item <= 50)

console.log(MenorQue50)