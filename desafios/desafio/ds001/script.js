function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.innerHTML = '<img.src="manha2.png">'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.innerHTML = '<img.src="tarde2.png">'
    } else {
        // BOA NOITE!
        img.innerHTML = `<img.src="noite.png">`
    }
}