function numeroPrimo(num) {
    if (num < 2 && num > 0) {
        return `${num} não se encaixa na regra de número primo`
    } else {
        let count = 0
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                count++
            }
        }
        if (count == 0) {
            return `${num} é número primo `
        } else {
            return `${num} não é número primo `
        }
    }

}

console.log(numeroPrimo(1))
console.log(numeroPrimo(2))
console.log(numeroPrimo(14))
console.log(numeroPrimo(11))
console.log(numeroPrimo(12))
console.log(numeroPrimo(37))