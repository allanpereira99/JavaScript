const anonimo = process.argv.indexOf('-a') != -1

if (anonimo) {
    process.stdout.write('digite seu nome!')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('/n', '')
        console.log(`OI ${nome}`)
        process.exit()
    })
}
