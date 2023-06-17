const topo = document.querySelector('header')

function ativaScroll(){
    topo.classList.toggle('fixo', scrollY > 700)

}

window.addEventListener('scroll', ativaScroll)