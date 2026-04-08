let pedra = '1'
let papel = '2'
let tesoura = '3'
    console.log('Bem vindo ao jogo. Escreva 1 para pedra, 2 para papel e 3 para tesoura.')
while(true){
let u1 = prompt('Primeiro usuário, digite sua jogada:')
let u2 = prompt('Segundo usuário, digite sua jogada:')

if(u1 == u2){
    console.log('Os dois usuários empataram')
}
if(u1 == 1 && u2 == 3){
    console.log('O primeiro usuário venceu');
}
else if(u1 == 3 && u2 == 1){
    console.log('O segundo usuário venceu');
}
if(u1 == 2 && u2 == 1){
    console.log('O primeiro usuário venceu');
}
else if(u1 == 1 && u2 == 2){
    console.log('O segundo usuário venceu');
}
if(u1 == 3 && u2 == 2){
    console.log('O primeiro usuário venceu');
}
else if(u1 == 2 && u2 == 3){
    console.log('O segundo usuário venceu');
}
else{
    console.log('Houve algo de errado, insira valores correspondentes')
}
}
