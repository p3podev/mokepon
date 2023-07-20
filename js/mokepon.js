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
    let spanPetPlayer=document.getElementById('pet_Player')
    if (radioHipodoge.checked) {
        spanPetPlayer.innerHTML=' Hipodoge '
    } else if (radioCapipepo.checked) {
        spanPetPlayer.innerHTML=' Capipepo '
    } else if (radioRatigueya.checked) {
        spanPetPlayer.innerHTML=' Ratigueya '
    } else if (radioLangostelvis.checked) {
        spanPetPlayer.innerHTML=' Langostelvis '
    } else if (radioTucapalma.checked) {
        spanPetPlayer.innerHTML=' Tucapalma '
    } else if (radioPydos.checked) {
        spanPetPlayer.innerHTML=' Pydos '
    }else {
        alert("Selecciona primero una Pet")
    }

}

window.addEventListener('load', startGame)
