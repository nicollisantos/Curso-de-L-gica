//Faça um Programa que converta metros para centímetros.
let m = parseFloat(prompt('Digite o valor métrico que você gostaria de converter para centímetros:'))
let cm = parseFloat(prompt(`O valor em centímetros é ${m*100}`))

if (m<0){
    console.log('Valor indefinido, digite um valor maior que zero')
}
else {
    console.log('Valor indefinido, digite outro valor')
}
