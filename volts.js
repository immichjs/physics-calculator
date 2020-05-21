function gerador (e, r, i) { // Copie essa função e cole no console do navegador.
    const ug = e - r * i
    console.log('Formula: Ug = E - R . i')
    console.log(`Ug = ${e} - ${r} . ${i} = ${ug}V`)
}

gerador(50, 5, 2) // Chame a função no console com os valores entre ().