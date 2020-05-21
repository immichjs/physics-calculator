function corrente (n, s) { // Copia a função joga no console do navegador.
    const e = (1.6 * 10 ** - 19).toPrecision(2)
    const Q = n * e
    const i = Q / s
    
    console.log('Formula: i = Q(n . e) / t')
    console.log(`i = ${n.toPrecision(2)} . ${e} : ${s}`)
    console.log(`i = ${Q} : ${s}`)
    console.log(`i = ${i.toPrecision(2)}A`)
}

function correnteQ (Q, s) { // Se você já tiver o valor de (Q), copie essa função.
    const e = 1.6 * 10 ** - 19
    const i = Q / s
    
    console.log('Formula: i = Q / t')
    console.log(`i = ${Q.toPrecision(2)} : ${s}`)
    console.log(`i = ${i.toPrecision(2)}A`)
}

corrente(5 * 10 ** 20, 20) // Chama a função com os valor de (n) e o tempo em segundos(s).
correnteQ(80, 20) // Chame essa função caso já tenha o valor de (Q) e o tempo em segundos(s).