function atualizaRelogio(){
    const horas = document.querySelector("#horas")
    const minutos = document.querySelector("#minutos")
    const segundos = document.querySelector("#segundos")

    const agora = new Date()

    const hora = agora.getHours().toString().padStart(2, "0")
    const minuto = agora.getMinutes().toString().padStart(2, "0")
    const segundo = agora.getSeconds().toString().padStart(2, "0")

    horas.textContent = hora
    minutos.innerHTML = minuto
    segundos.innerHTML = segundo

}

setInterval(atualizaRelogio, 1000)
