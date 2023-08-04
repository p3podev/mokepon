let attackPlayer = ''
let attackEnemy = ''
let playerLives = 3
let enemyLives = 3
function startGame() {
    let selectAttackSection=document.getElementById('select_attack')
    selectAttackSection.style.display='none'
    let restartSection=document.getElementById('restart')
    restartSection.style.display='none'
    let buttonPet = document.getElementById('button_pet')
    buttonPet.addEventListener('click', selectPetPlayer)
    let buttonFire = document.getElementById('button_fire')
    buttonFire.addEventListener('click', attackFire)
    let buttonWater = document.getElementById('button_water')
    buttonWater.addEventListener('click', attackWater)
    let buttonEarth = document.getElementById('button_earth')
    buttonEarth.addEventListener('click', attackEarth)
    let buttonRestart = document.getElementById('button_reset')
    buttonRestart.addEventListener('click', resetGame)
}
function resetGame(){
    window.location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function selectPetPlayer() {
    let selectAttackSection=document.getElementById('select_attack')
    selectAttackSection.style.display='flex'
    let selectPetSection=document.getElementById('select_pet')
    selectPetSection.style.display='none'
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
        spanPetPlayer.innerHTML = ' Gargolin '
    } else if (radioTucapalma.checked) {
        spanPetPlayer.innerHTML = ' Tucapalma '
    } else if (radioPydos.checked) {
        spanPetPlayer.innerHTML = ' Pydos '
    } else {
        alert("Selecciona primero una Pet")
    }
    selectPetEnemy()
    let buttonPet = document.getElementById('button_pet')
    buttonPet.disabled=true
    radioHipodoge.disabled=true
    radioCapipepo.disabled=true
    radioRatigueya.disabled=true
    radioLangostelvis.disabled=true
    radioTucapalma.disabled=true
    radioPydos.disabled=true
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
function reviewLives(){
    if (enemyLives==0){
        createFinalMessage('CONGRATS YOU WON MOKEPON GAME 🔮🎇')     
    }else if(playerLives==0){
        createFinalMessage('GAME OVER ❌ YOU LOST MOKEPON GAME')
    }
}
function createFinalMessage(finalResult) {
    let sectionMessages = document.getElementById('messages')
    let pharagraph = document.createElement('p')
    pharagraph.innerHTML = finalResult
    sectionMessages.appendChild(pharagraph);
    
    let buttonFire = document.getElementById('button_fire')
    buttonFire.disabled=true
    let buttonWater = document.getElementById('button_water')
    buttonWater.disabled=true
    let buttonEarth = document.getElementById('button_earth')
    buttonEarth.disabled=true
    let restartSection=document.getElementById('restart')
    restartSection.style.display='block'
}
function createMessage(result) {
    let sectionMessages = document.getElementById('messages')
    let pharagraph = document.createElement('p')
    pharagraph.innerHTML = "Your Pet attacked with " + attackPlayer + " and Enemy's pet attacked with " + attackEnemy + " -- " + result + "-- "
    sectionMessages.appendChild(pharagraph);
}
function combat() {
    let spanplayerLives = document.getElementById('player_Lives')
    let spanenemyLives = document.getElementById('enemy_Lives')
        if (attackPlayer == attackEnemy) {
            createMessage( '😐 YOU DRAW 😐')
        } else if ((attackPlayer == 'Fire' && attackEnemy == 'Earth') || (attackPlayer == 'Water' && attackEnemy == 'Fire') || (attackPlayer == 'Earth' && attackEnemy == 'Water')) {
            createMessage('🎇 YOU WIN 🎇')
            enemyLives--
            spanenemyLives.innerHTML = enemyLives
        } else {
            createMessage( '😪 YOU LOSE 😪')
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
