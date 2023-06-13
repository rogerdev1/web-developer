let homeIcon = document.getElementById('homeIcon')
let aboutIcon = document.getElementById('aboutIcon')
let projectsIcon = document.getElementById('projectsIcon')
let contactsIcon = document.getElementById('contactsIcon')


function passaMouse(){
    homeIcon.style.opacity = '1'
    aboutIcon.style.opacity = '1'
    projectsIcon.style.opacity = '1'
    contactsIcon.style.opacity = '1'
}

function saiMouse(){
    homeIcon.style.opacity = "0"
    homeIcon.style.transition = '0.5s'

    aboutIcon.style.opacity = "0"
    aboutIcon.style.transition = '0.5s'

    projectsIcon.style.opacity = "0"
    projectsIcon.style.transition = '0.5s'

    contactsIcon.style.opacity = "0"
    contactsIcon.style.transition = '0.5s'
}
