var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas. `)
if (hora <= 11 && hora > 6) {
    console.log('Bom Dia!')
} else if (hora <= 18 && hora > 12) {
    console.log('Boa Tarde!')
} else if (hora >= 19 && hora < 22) {
    console.log(`Boa Noite!`)
} else {
    console.log('Boa Madrugada!')
}