Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let n1 = parseFloat(prompt('Digite uma nota entre zero e dez:'))

if(n1<0){
    console.log(`O valor digitado ${n1} é inválido, digite um valor válido`)
}-5

else if(n1>10){
    console.log(`O valor digitado ${n1} é inválido, digite um valor válido`)
}
else if(n1>0||n1<10){
    console.log(`O valor digitado ${n1} é válido`)
}
else{
    console.log(`O valor digitado ${n1} é inválido, digite um valor válido`)
}
