function coulombF (q1, q2, d) {
    const k = 9 * 10 ** 9
    d **= 2
    const f = k * q1 * q2 / d
    console.log('Formula: F = K . Q1. Q2 : d² ')
    console.log(`F = ${k.toPrecision(2)} . ${q1.toPrecision(1)} . ${q2.toPrecision(1)} : ${d.toPrecision(1)} = N`)
    console.log(`F = ${f.toPrecision(3)}N`)
}

coulombF(2 * 10 ** -6, 5 * 10 ** -6, 0.2)