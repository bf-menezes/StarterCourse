
const arr = [1, 2, 3, 4, 5];

/*arr.map(function(item) {
 return item + 10;
})*/

arr.map(item => item + 10)



const usuario = { nome: 'Diego', idade: 23 };

/*function mostraIdade(usuario) {
 return usuario.idade;
}*/

const MostraIdade = (usuario => usuario.idade)

console.log(MostraIdade(usuario))




const nome = "Diego";
const idade = 23;

/* function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);*/


const mostraUsuario = ((nome, idade) => ({nome, idade}))
console.log (mostraUsuario (nome, idade))



/*const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }*/
   
const promise = () => new Promise((resolve,reject) => resolve())



