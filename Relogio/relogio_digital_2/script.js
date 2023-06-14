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


const relogio = document.querySelector('.relogio')
const tempo = document.querySelector('.tempo')
const esportes = document.querySelector('.esportes')


function mudaEstilo(){

    const background = [
        'url(background.jpg)',
        'url(background-1.jpg)',
        'url(background-2.jpg)',
        'url(background-3.png)'
    ]

    const index = Math.floor(Math.random() * background.length)

    relogio.style.background = background[index]
    relogio.style.backgroundSize = '200px 200px'
    relogio.style.backgroundRepeat = 'no-repeat'
    
}


function desligaTela(){
    if(relogio.style.display === 'none' || relogio.style.display === 'block'){
        relogio.style.display = 'flex'
        tempo.style.display = 'block'
        relogio.style.backgroundImage = 'url(background.jpg)'

    }
    else{
        relogio.style.backgroundColor = 'black'
        relogio.style.backgroundImage = 'none'
        relogio.style.display = 'block'
        tempo.style.display = 'none'
    }
}

function funcaoEsportes(){
    if(esportes.style.display === 'none'){
        esportes.style.display = 'block'
    }
    else{
        esportes.style.display = 'none'
    }
}
