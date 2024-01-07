const selectAttackSection = document.getElementById('select_attack')
const restartSection = document.getElementById('restart')
const buttonPet = document.getElementById('button_pet')
const buttonAttack = document.getElementById('button_attack')
const buttonRestart = document.getElementById('button_reset')
const selectPetSection = document.getElementById('select_pet')
const spanPetPlayer = document.getElementById('pet_Player')
const spanPetEnemy = document.getElementById('pet_Enemy')
const sectionMessages = document.getElementById('resultHTML')
const playersAttack = document.getElementById('players_attack')
const enemysAttack = document.getElementById('enemys_attack')
const spanplayerLives = document.getElementById('player_Lives')
const spanenemyLives = document.getElementById('enemy_Lives')
const cardsContainer = document.getElementById('cardsContainer')

let mokepones = []
let mokeponsOption
let radioHipodoge
let radioCapipepo
let radioRatigueya
let radioGargolin
let radioTucapalma
let radioPydos
let petPlayer
let MokeponsAttacks
let buttonWater
let buttonEarth
let buttonFire
let buttons = []
let pictures = []
let attacksPlayer = []
let enemyMokeponAttack
let extrackEnemyAttack = []
let randomEnemyAttack = []
let indexPlayerAttack
let indexEnemyAttack
let winPlayer = 0
let winEnemy = 0
let playerLives = 3
let enemyLives = 3
let fImg = 'https://media.discordapp.net/attachments/1052032664024137803/1136862631622344765/image.png'
let wImg = 'https://media.discordapp.net/attachments/1052032664024137803/1136862632066961488/image_3.png'
let eImg = 'https://media.discordapp.net/attachments/1052032664024137803/1136862631844655235/image_1.png'
class Mokepon {
    constructor(name, photo, life) {
        this.name = name
        this.photo = photo
        this.life = life
        this.attacks = []
    }
}
//Objetos Instancia que vienen desde la clase se rellena con las propiedades definidas de la clase
let Hipodoge = new Mokepon('Hipodoge', 'https://media.discordapp.net/attachments/1052032664024137803/1136839963376365628/5c9a0195b7e3470363aa7b45.png?width=522&height=468', 5)
let Capipepo = new Mokepon('Capipepo', 'https://media.discordapp.net/attachments/1052032664024137803/1136831710609281144/capipepo.png?width=421&height=468', 5)
let Ratigueya = new Mokepon('Ratigueya', 'https://media.discordapp.net/attachments/1052032664024137803/1136831711607521391/ratigueya.png?width=566&height=468', 5)
let Gargolin = new Mokepon('Gargolin', 'https://media.discordapp.net/attachments/1052032664024137803/1136831711108415598/langostelvis.png?width=471&height=468', 5)
let Tucapalma = new Mokepon('Tucapalma', 'https://media.discordapp.net/attachments/1052032664024137803/1136831711842418738/tucapalma.png?width=444&height=468', 5)
let Pydos = new Mokepon('Pydos', 'https://media.discordapp.net/attachments/1052032664024137803/1136831711355867228/pydos.png', 5)

//Metodo Push empuja valores dentro del arreglo
mokepones.push(Hipodoge, Capipepo, Ratigueya, Gargolin, Tucapalma, Pydos)

//Objetos Literales: Informacion en el Objeto (Desde 0 sin parametros de la clase)
Hipodoge.attacks.push(
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Earth', id: 'button_earth', img: eImg }
)
Capipepo.attacks.push(
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Water', id: 'button_Water', img: wImg }
)
Ratigueya.attacks.push(
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Earth', id: 'button_earth', img: eImg }
)
Gargolin.attacks.push(
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Earth', id: 'button_earth', img: eImg }
)
Tucapalma.attacks.push(
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Water', id: 'button_water', img: wImg },
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Fire', id: 'button_fire', img: fImg }
)
Pydos.attacks.push(
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Earth', id: 'button_earth', img: eImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Fire', id: 'button_fire', img: fImg },
    { name: 'Water', id: 'button_water', img: wImg }
)
function startGame() {
    //foreach nos genera una iteracion (For) de lo que hay dentro de un arreglo 
    mokepones.forEach((mokepon) => {
        // Generando Estructuras llamadas templates literarios (Implementar HTML con la informacion de JS)
        mokeponsOption = `
        <input type="radio" name="pet" id=${mokepon.name}>
        <label class="mokepon_card" for="${mokepon.name}">
            <p>${mokepon.name}</p>
            <img src="${mokepon.photo}"
                alt="${mokepon.name}">
        </label>
        `
        cardsContainer.innerHTML += mokeponsOption
        radioHipodoge = document.getElementById('Hipodoge')
        radioCapipepo = document.getElementById('Capipepo')
        radioRatigueya = document.getElementById('Ratigueya')
        radioGargolin = document.getElementById('Gargolin')
        radioTucapalma = document.getElementById('Tucapalma')
        radioPydos = document.getElementById('Pydos')
    })
    selectAttackSection.style.display = 'none'
    restartSection.style.display = 'none'
    buttonPet.addEventListener('click', selectPetPlayer)
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
        spanPetPlayer.innerHTML = radioHipodoge.id
        petPlayer = radioHipodoge.id
    } else if (radioCapipepo.checked) {
        spanPetPlayer.innerHTML = radioCapipepo.id
        petPlayer = radioRatigueya.id
    } else if (radioRatigueya.checked) {
        spanPetPlayer.innerHTML = radioRatigueya.id
        petPlayer = radioRatigueya.id
    } else if (radioGargolin.checked) {
        spanPetPlayer.innerHTML = radioGargolin.id
        petPlayer = radioGargolin.id
    } else if (radioTucapalma.checked) {
        spanPetPlayer.innerHTML = radioTucapalma.id
        petPlayer = radioTucapalma.id
    } else if (radioPydos.checked) {
        spanPetPlayer.innerHTML = radioPydos.id
        petPlayer = radioPydos.id
    } else {
        alert("Selecciona primero una Pet")
    }
    extractAttack(petPlayer)
    selectPetEnemy()
    buttonPet.disabled = true
    radioHipodoge.disabled = true
    radioCapipepo.disabled = true
    radioRatigueya.disabled = true
    radioGargolin.disabled = true
    radioTucapalma.disabled = true
    radioPydos.disabled = true
}
function extractAttack(petPlayer) {
    let attacks
    for (let i = 0; i < mokepones.length; i++) {
        if (petPlayer === mokepones[i].name) {
            attacks = mokepones[i].attacks
        }
    }
    showAttacks(attacks)
}
function showAttacks(attacks) {
    attacks.forEach((attack) => {
        MokeponsAttacks = `
        <button id=${attack.id} class="button_attack bAttack"><img src= ${attack.img} alt=${attack.name} class="buttonPic"> ${attack.name} </button>
        `
        buttonAttack.innerHTML += MokeponsAttacks
    })
    buttonWater = document.getElementById('button_water')
    buttonEarth = document.getElementById('button_earth')
    buttonFire = document.getElementById('button_fire')
    buttons = document.querySelectorAll('.bAttack')
    pictures = document.querySelectorAll('.buttonPic')

    //querySelectorAll selecciona a todos los elementos se lo hace por clase si es id es mala practica
}
function sequenceAttack() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {

            if ((e.target.textContent === ' Water ') || (e.target.alt === 'Water')) {
                attacksPlayer.push('Water')
                button.style.background = '#30475E'
                button.disabled = true

            } else if ((e.target.textContent === ' Fire ') || (e.target.alt === 'Fire')) {
                attacksPlayer.push('Fire')
                button.style.background = '#30475E'
                button.disabled = true
            } else {
                attacksPlayer.push('Earth')
                button.style.background = '#30475E'
                button.disabled = true

            }
            combat()
        })
        
    })

}
function selectPetEnemy() {
    let petRandom = aleatorio(0, (mokepones.length - 1))
    spanPetEnemy.innerHTML = mokepones[petRandom].name
    enemyMokeponAttack = mokepones[petRandom].attacks
    for (let i = 0; i < enemyMokeponAttack.length; i++) {
        extrackEnemyAttack.push(enemyMokeponAttack[i].name)
    }
    randomEnemyAttack = extrackEnemyAttack.sort(randomOrder);
    sequenceAttack()
}
function randomOrder() {
    return Math.random() - 0.5;
}
function reviewVictories() {
    if (attacksPlayer.length === randomEnemyAttack.length) {
        if (winPlayer > winEnemy) {
            createFinalMessage('CONGRATS YOU WON MOKEPON GAME 🔮🎇')
        } else if (winEnemy > winPlayer) {
            createFinalMessage('GAME OVER ❌ YOU LOST MOKEPON GAME')
        } else {
            createFinalMessage('😐 YOU DRAW 😐')
        }
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
    newPlayerAttack.innerHTML = indexPlayerAttack
    newEnemyAttack.innerHTML = indexEnemyAttack
    playersAttack.appendChild(newPlayerAttack);
    enemysAttack.appendChild(newEnemyAttack);
}
function saveCombat(player, enemy) {
    indexPlayerAttack = attacksPlayer[player]
    indexEnemyAttack = randomEnemyAttack[enemy]

}
function combat() {
    if (attacksPlayer.length === randomEnemyAttack.length) {

        for (let i = 0; i < attacksPlayer.length; i++) {
            if (attacksPlayer[i] == randomEnemyAttack[i]) {
                saveCombat(i, i)
                createMessage('😐 YOU DRAW 😐')
            } else if ((attacksPlayer[i] == 'Fire' && randomEnemyAttack[i] == 'Earth') || (attacksPlayer[i] == 'Water' && randomEnemyAttack[i] == 'Fire') || (attacksPlayer[i] == 'Earth' && randomEnemyAttack[i] == 'Water')) {
                saveCombat(i, i)
                createMessage('🎇 YOU WIN 🎇')
                winPlayer++
                spanplayerLives.innerHTML = winPlayer
            } else {
                saveCombat(i, i)
                createMessage('😪 YOU LOSE 😪 ')
                winEnemy++
                spanenemyLives.innerHTML = winEnemy
            }
        }
    }

    //Revisar Vidas
    reviewVictories()
}
window.addEventListener('load', startGame)
