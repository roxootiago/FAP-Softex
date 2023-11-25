function palindromo(texto)
{
let strreversa = texto.split('').reverse().join('').toLowerCase()
let noSpace = strreversa.split(' ').join('')
let strEdit = texto.split(' ').join('').toLowerCase()

return noSpace == strEdit ? ` ${texto}  é um palíndromo` : `${texto}  não é um palíndromo`
}

console.log(palindromo('ana ana'))
console.log(palindromo('texto'))
console.log(palindromo('Roma me tem amor'))