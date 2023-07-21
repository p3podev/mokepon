let attackPlayer = ''
let attackEnemy = ''
function startGame() {
    let buttonPet = document.getElementById('button_pet')
    buttonPet.addEventListener('click', selectPetPlayer)
    let buttonFire = document.getElementById('button_fire')
    buttonFire.addEventListener('click', attackFire)
    let buttonWater = document.getElementById('button_water')
    buttonWater.addEventListener('click', attackWater)
    let buttonEarth = document.getElementById('button_earth')
    buttonEarth.addEventListener('click', attackEarth)
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function selectPetPlayer() {
    let radioHipodoge = document.getElementById('hipodoge')
    let radioCapipepo = document.getElementById('capipepo')
    let radioRatigueya = document.getElementById('ratigueya')
    let radioLangostelvis = document.getElementById('langostelvis')
    let radioTucapalma = document.getElementById('tucapalma')
    let radioPydos = document.getElementById('pydos')
    let spanPetPlayer = document.getElementById('pet_Player')
    if (radioHipodoge.checked) {
        spanPetPlayer.innerHTML = ' Hipodoge '
    } else if (radioCapipepo.checked) {
        spanPetPlayer.innerHTML = ' Capipepo '
    } else if (radioRatigueya.checked) {
        spanPetPlayer.innerHTML = ' Ratigueya '
    } else if (radioLangostelvis.checked) {
        spanPetPlayer.innerHTML = ' Langostelvis '
    } else if (radioTucapalma.checked) {
        spanPetPlayer.innerHTML = ' Tucapalma '
    } else if (radioPydos.checked) {
        spanPetPlayer.innerHTML = ' Pydos '
    } else {
        alert("Selecciona primero una Pet")
    }
    selectPetEnemy()

}
function selectPetEnemy() {
    let petRandom = aleatorio(1, 6)
    let spanPetEnemy = document.getElementById('pet_Enemy')
    switch (petRandom) {
        case 1:
            spanPetEnemy.innerHTML = ' Hipodoge '
            break;
        case 2:
            spanPetEnemy.innerHTML = ' Capipepo '
            break;
        case 3:
            spanPetEnemy.innerHTML = ' Ratigueya '
            break;
        case 4:
            spanPetEnemy.innerHTML = ' Langostelvis '
            break;
        case 5:
            spanPetEnemy.innerHTML = ' Tucapalma '
            break;
        case 6:
            spanPetEnemy.innerHTML = ' Pydos '
            break;
    }
}
function attackEnemyRandom() {
    let attackRandom = aleatorio(1, 3)
    switch (attackRandom) {
        case 1:
            attackEnemy = 'Fire'
            break;
        case 2:
            attackEnemy = 'Water'
            break;
        case 3:
            attackEnemy = 'Earth'
            break;
    }
    createMessage()
}
function createMessage() {
    let sectionMessages=document.getElementById('messages')
    let pharagraph = document.createElement('p')
    pharagraph.innerHTML = "Your Pet attacked with " + attackPlayer + " and Enemy's pet attacked with " + attackEnemy + " -- WAITING-- "
    sectionMessages.appendChild(pharagraph);
}
function attackFire() {
    attackPlayer = 'Fire'
    attackEnemyRandom()
}
function attackWater() {
    attackPlayer = 'Water'
    attackEnemyRandom()
}
function attackEarth() {
    attackPlayer = 'Earth'
    attackEnemyRandom()
}

window.addEventListener('load', startGame)
