const selectAttackSection = document.getElementById('select_attack')
const restartSection = document.getElementById('restart')
const buttonPet = document.getElementById('button_pet')
const buttonFire = document.getElementById('button_fire')
const buttonWater = document.getElementById('button_water')
const buttonEarth = document.getElementById('button_earth')
const buttonRestart = document.getElementById('button_reset')
const selectPetSection = document.getElementById('select_pet')
const radioHipodoge = document.getElementById('hipodoge')
const radioCapipepo = document.getElementById('capipepo')
const radioRatigueya = document.getElementById('ratigueya')
const radioLangostelvis = document.getElementById('langostelvis')
const radioTucapalma = document.getElementById('tucapalma')
const radioPydos = document.getElementById('pydos')
const spanPetPlayer = document.getElementById('pet_Player')
const spanPetEnemy = document.getElementById('pet_Enemy')
const sectionMessages = document.getElementById('resultHTML')
const playersAttack = document.getElementById('players_attack')
const enemysAttack = document.getElementById('enemys_attack')
const spanplayerLives = document.getElementById('player_Lives')
const spanenemyLives = document.getElementById('enemy_Lives')
let attackPlayer = ''
let attackEnemy = ''
let playerLives = 3
let enemyLives = 3
function startGame() {
    selectAttackSection.style.display = 'none'
    restartSection.style.display = 'none'
    buttonPet.addEventListener('click', selectPetPlayer)
    buttonFire.addEventListener('click', attackFire)
    buttonWater.addEventListener('click', attackWater)
    buttonEarth.addEventListener('click', attackEarth)
    buttonRestart.addEventListener('click', resetGame)
}
function resetGame() {
    window.location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function selectPetPlayer() {
    selectAttackSection.style.display = 'flex'
    selectPetSection.style.display = 'none'
    if (radioHipodoge.checked) {
        spanPetPlayer.innerHTML = ' Hipodoge '
    } else if (radioCapipepo.checked) {
        spanPetPlayer.innerHTML = ' Capipepo '
    } else if (radioRatigueya.checked) {
        spanPetPlayer.innerHTML = ' Ratigueya '
    } else if (radioLangostelvis.checked) {
        spanPetPlayer.innerHTML = ' Gargolin '
    } else if (radioTucapalma.checked) {
        spanPetPlayer.innerHTML = ' Tucapalma '
    } else if (radioPydos.checked) {
        spanPetPlayer.innerHTML = ' Pydos '
    } else {
        alert("Selecciona primero una Pet")
    }
    selectPetEnemy()
    buttonPet.disabled = true
    radioHipodoge.disabled = true
    radioCapipepo.disabled = true
    radioRatigueya.disabled = true
    radioLangostelvis.disabled = true
    radioTucapalma.disabled = true
    radioPydos.disabled = true
}
function selectPetEnemy() {
    let petRandom = aleatorio(1, 6)
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
            spanPetEnemy.innerHTML = ' Gargolin '
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
    combat()
}
function reviewLives() {
    if (enemyLives == 0) {
        createFinalMessage('CONGRATS YOU WON MOKEPON GAME 🔮🎇')
    } else if (playerLives == 0) {
        createFinalMessage('GAME OVER ❌ YOU LOST MOKEPON GAME')
    }
}
function createFinalMessage(finalResult) {
    sectionMessages.innerHTML = finalResult
    buttonFire.disabled = true
    buttonWater.disabled = true
    buttonEarth.disabled = true
    restartSection.style.display = 'block'
}
function createMessage(result) {
    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')
    sectionMessages.innerHTML = result
    newPlayerAttack.innerHTML = attackPlayer
    newEnemyAttack.innerHTML = attackEnemy
    playersAttack.appendChild(newPlayerAttack);
    enemysAttack.appendChild(newEnemyAttack);
}
function combat() {
    if (attackPlayer == attackEnemy) {
        createMessage('😐 YOU DRAW 😐')
    } else if ((attackPlayer == 'Fire' && attackEnemy == 'Earth') || (attackPlayer == 'Water' && attackEnemy == 'Fire') || (attackPlayer == 'Earth' && attackEnemy == 'Water')) {
        createMessage('🎇 YOU WIN 🎇')
        enemyLives--
        spanenemyLives.innerHTML = enemyLives
    } else {
        createMessage('😪 YOU LOSE 😪')
        playerLives--
        spanplayerLives.innerHTML = playerLives
    }
    //Revisar Vidas
    reviewLives()
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
