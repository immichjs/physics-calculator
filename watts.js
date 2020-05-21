/* 
    ### COMO USAR:
        1. Copie o código que está lá em baixo.
        2. Aperte CTRL + SHIFT + J ou Botão direito > inspecionar elemento > clique no console em umas das abas do devTool
        no navegador para abrir o console.
        3. Cole o código copiado no console dessa forma: https://prnt.sc/sia6ce (Print de como tem que aparecer no console).
        4. Escreva no console. 
            - pcd[0](valor de U, valor de i) para calcular U . i
            - pcd[1](valor de U, valor R) para calcular U² . i
            - pcd[0](valor de R, valor de i)  para calcular R . i²

    ### O Resultado com base no que você colocou como argumento entre (argumento 1, argumentos 2) quando chamar a função.
    - Forma de acessar o código 1
        console.log('Código 1:')
        pcd[0](30, 2)
        pcd[1](30, 15)
        pcd[2](15, 2)

    PRINT DO RESULTADO NO CONSOLE: 
        - https://prnt.sc/sia8eq (Usando runtime do Node)
        - https://prnt.sc/siadr2 (Usando console do navegador)
*/

// Copie daqui
const pcd = [
    function (u, i) { // pcd[0]
        const pcd = u * i
        console.log('Formula: U . i = W')
        console.log(`${u} . ${i} = ${pcd}W`)
    },
    function (u, r) { // pcd[1]
        const pcd = u ** 2 / r
        console.log('Formula: U² : r = W')
        console.log(`${u}² : ${r} = ${pcd}W`)
    },
    function (r, i) { // pcd[2]
        const pcd = r * (i ** 2)
        console.log('Formula: R . i² = W')
        console.log(`${r} . ${i}² = ${pcd}W`)
    }
] // Até aqui para acessar as funções utilizando pcd[0](), pcd[1](), pcd[2]()

// Forma de executar a função
pcd[0](30, 2)
pcd[1](30, 15)
pcd[2](15, 2)