Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let b = parseFloat(prompt('Digite o valor da base do seu quadrado:'))
let a = parseFloat(prompt('Digite o valor da altura do seu quadrado:'))

if(b<0){
    console.log('Valor indefinido, digite um valor maior que zero')
}
else if(a<0){
    console.log('Valor indefinido, digite um valor maior que zero')
}
else {
    console.log('Valor indefinido, digite valores válidos')
}
let ab = parseFloat(prompt(`A área do seu quadrado é de ${a*b}`))
let abab = parseFloat(prompt(`O dobro da área do seu quadrado é de ${a*b*a*b}`))
