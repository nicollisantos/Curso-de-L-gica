let pedra = '1'
let papel = '2'
let tesoura = '3'
let n1 = prompt('Usuário um digite seu nick:')
let n2 = prompt('Usuário dois digite seu nick:')
    console.log('Bem vindo ao jogo. Escreva 1 para pedra, 2 para papel e 3 para tesoura.')
while(true){
let u1 = prompt(`${n1} digite sua jogada:`)
let u2 = prompt(`${n2} digite sua jogada:`)

if(u1 == u2){
    console.log('Os dois usuários empataram')
}
if(u1 == 1 && u2 == 3){
    console.log(`${n1} venceu`);
}
else if(u1 == 3 && u2 == 1){
    console.log(`${n2} venceu`);
}
if(u1 == 2 && u2 == 1){
    console.log(`${n1} venceu`);
}
else if(u1 == 1 && u2 == 2){
    console.log(`${n2} venceu`);
}
if(u1 == 3 && u2 == 2){
    console.log(`${n1} venceu`);
}
else if(u1 == 2 && u2 == 3){
    console.log(`${n2} venceu`);
}
else{
    console.log('Houve algo de errado, insira valores correspondentes')
}
}
