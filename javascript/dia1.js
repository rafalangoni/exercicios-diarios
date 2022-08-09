//prticando MAP

const nomes = ['Rafael', 'Davi', 'Natalia'];

nomes.map(nome =>{
    const nomeCompleto = `${nome} Langoni`;
    console.log(nomeCompleto)
})

const destruct = [Rafael, Davi, Natalia] = nomes;
console.log(`Desestruracao array ${Rafael}`)
console.log(nomes[0])

const RafaelObj = {
    nome: 'Rafael',
    profissao: 'bancário',
    idade: 38
}

const testeDesestruturacao = { nome, profissao, idade} = RafaelObj

console.log(`Desestruturacao objeto ${nome}, ${profissao}, ${idade}`)

