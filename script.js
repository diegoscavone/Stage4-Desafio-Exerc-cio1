let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restDivision = numberOne % numberTwo

alert(`A soma dos números: ${numberOne} + ${numberTwo} = ${sum}`)
alert(`A subtração dos números: ${numberOne} - ${numberTwo} = ${subtraction}`)
alert(`A multiplicação dos números: ${numberOne} * ${numberTwo} = ${multiplication}`)
alert(`A divisão dos números: ${numberOne} / ${numberTwo} = ${division}`)
alert(`O resto da divisão dos números: ${numberOne} / ${numberTwo} = ${restDivision}`)

if(sum % 2 === 0){
  alert(`A soma dos números ${numberOne} e ${numberTwo} é: ${sum} sendo este um número par`)
} else {
  alert(`A soma dos números ${numberOne} e ${numberTwo} é: ${sum} sendo este um número impar`)
}

if(numberOne == numberTwo){
  alert(`Os números ${numberOne} e ${numberTwo} são iguais`)
} else{
  alert(`Os números ${numberOne} e ${numberTwo} são diferentes`)
}