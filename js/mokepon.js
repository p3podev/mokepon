function startGame() {
    let buttonPet = document.getElementById('button_pet')
    buttonPet.addEventListener('click', selectPetPlayer)
}

function selectPetPlayer() {
    let radioHipodoge = document.getElementById('hipodoge')
    let radioCapipepo = document.getElementById('capipepo')
    let radioRatigueya = document.getElementById('ratigueya')
    let radioLangostelvis = document.getElementById('langostelvis')
    let radioTucapalma = document.getElementById('tucapalma')
    let radioPydos = document.getElementById('pydos')

    if (radioHipodoge.checked) {
        alert("Seleccionaste a Hipodoge")
    } else if (radioCapipepo.checked) {
        alert("Seleccionaste a Capipepo")
    } else if (radioRatigueya.checked) {
        alert("Seleccionaste a Ratigueya")
    } else if (radioLangostelvis.checked) {
        alert("Seleccionaste a Langostelvis")
    } else if (radioTucapalma.checked) {
        alert("Seleccionaste a Tucapalma")
    } else if (radioPydos.checked) {
        alert("Seleccionaste a Pydos")
    }else {
        alert("Selecciona primero una Pet")
    }

}

window.addEventListener('load', startGame)
