// Copie essa função e cole no console do navegador.
const calculo = {
    paralelo (resistor1, resistor2) {
        const r1r = resistor1 * resistor2
        const r2r = resistor1 + resistor2
    
        console.log(`Formula: R = R1 . R2 : R1 + R2`)
        console.log(`R = ${resistor1} . ${resistor2} : ${resistor1} + ${resistor2}`)
        console.log(`R = ${r1r} : ${r2r} = ${r1r / r2r}Ω`)
    },
    paralelo2 (resistores, numeroDeResistores) {
        console.log(`Formula: R = R : n`)
        console.log(`R = ${resistores} : ${numeroDeResistores}`)
        console.log(`R = ${resistores / numeroDeResistores}Ω`)
    }
}

// Para chamar a função com os valores que quiser abaixo, é só escrever igual ta abaixo e colocar os valores entre ().
calculo.paralelo(6, 6)
calculo.paralelo2(6, 2)