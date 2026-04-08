tipos de variaveis programiz:
texto;
string;
number;
decimal;
bool (v ou f);
lista/array;
objeto/map
ex de array: lista_compras = [["Carne", ["Promoção", "29,90"]]"Arroz", "Frutas", "Verduras"]]
console.log(lista_compras[1])

lista_compras = [["Carne", ["Promoção", "29,90"]]"Arroz", "Frutas", "Verduras"]
console.log(lista_compras[0][1][0])

//map
let animal=[ 
{
    "nome": "cavalo",
    "peso": "800kg",
    "altura": "1.45 cm",
    "cor": "marrom",
    "raça": "crioulo"
},
//console.log(animal['0'])
{
    "nome": "gato",
    "peso": "3.5 kg",
    "altura": "1.45 cm",
    "cor": "marrom",
    "raça": "srd",
    "filhotes": [
        {
        "nome": "luke",
         "idade":"2",
        },
        {
         "nome": "pedroco",
         "idade":"1"
        }
    ]
}
]
console.log(animal['1']["filhotes"][1]["nome"])
ou
animal[1]['filhotes'].forEach((filho)=>console.log(filho)['nome']))
ou
filhotes.forEach(filhotes=>console.log(filhotes['nome']))

