
let usuário = 'nick'
let senha = '123'
let tentativa = 0
while (true){
    let user = prompt('Digite seu usuário')
    let password = prompt('Digite sua senha')
    if(user==usuário && password == senha){
        console.log('Você está logado');
        break
    }else
{
        console.log('Usuário ou senha incorretos');
}
        tentativa++
if(tentativa>3)
{
        console.log('Seu acesso foi bloqueado')
        break
}
}
