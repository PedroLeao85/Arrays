let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort() //vetor em ordem crescente
console.log(`Nosso vetor é o: ${num}`)
console.log(`O vetor tem : ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

for( let c = 0 ; c < num.length ; c++){  //imprimindo o vetor
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

console.log('-------------------------------------------------')

for( let c in num){ // maneira atualizada
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

console.log('-------------------------------------------------')

console.log(`Nosso vetor é o: ${num}`)

let pos = num.indexOf(8) // procura em qual posição o valor está no vetor
console.log(`O valor 8 está na posição ${pos}`)

let pos2 = num.indexOf(4) // quando não existe o valor
if(pos2 == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos2}`)
}
