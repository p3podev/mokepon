const selectAttackSection = document.getElementById('select_attack')
const restartSection = document.getElementById('restart')
const buttonPet = document.getElementById('button_pet')
const buttonAttack = document.getElementById('button_attack')
const buttonRestart = document.getElementById('button_reset')
const selectPetSection = document.getElementById('select_pet')
const spanPetPlayer = document.getElementById('pet_Player')
const spanPetEnemy = document.getElementById('pet_Enemy')
const sectionMessages = document.getElementById('resultHTML')
const finalMessages = document.getElementById('finalresultHTML')
const playersAttack = document.getElementById('players_attack')
const enemysAttack = document.getElementById('enemys_attack')
const spanplayerLives = document.getElementById('player_Lives')
const spanenemyLives = document.getElementById('enemy_Lives')
const cardsContainer = document.getElementById('cardsContainer')
const sectionShowMap = document.getElementById('show_map')
const map = document.getElementById('map')
const widthMaxMap=460

let mokepones = []
let mokeponsOption
let radioHipodoge
let radioCapipepo
let radioRatigueya
let radioGargolin
let radioTucapalma
let radioPydos
let petPlayer
let petEnemy
let myMokepon
let rivalsMokepon = []
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
let ct = -1
let canvas = map.getContext("2d")
let interval
let backgroundMap = new Image()
backgroundMap.src = 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265471/Mokepon/mokeponMap_ipvlbd.jpg'
let widthMap=window.innerWidth-20
if(widthMap>widthMaxMap){
    widthMap=widthMaxMap-20
}
let heightMap =widthMap*3/4
map.height=heightMap
map.width=widthMap
let fImg = 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265471/Mokepon/fire_vtm5qo.png'
let wImg = 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265470/Mokepon/water_o2vj3k.png'
let eImg = 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265470/Mokepon/earth_rqf6hd.png'

class Mokepon {
    constructor(name, photo, life, photoMap) {
        this.name = name
        this.photo = photo
        this.life = life
        this.attacks = []
        this.width = 50
        this.height = 50
        this.x = aleatorio(this.width +1 , widthMap-this.width)
        this.y = aleatorio(this.height +1, heightMap -this.height)
        this.mapPic = new Image()
        this.mapPic.src = photoMap
        this.speedX = 0
        this.speedY = 0
    }
    drawMokepon() {
        canvas.drawImage(
            this.mapPic,
            this.x,
            this.y,
            this.width,
            this.height)
    }
}

//Objetos Instancia que vienen desde la clase se rellena con las propiedades definidas de la clase
let Hipodoge = new Mokepon('Hipodoge', 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265470/Mokepon/hipodoge_wsov3x.png', 5, 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265473/Mokepon/hipodogue_face_d03ity.png')
let Capipepo = new Mokepon('Capipepo', 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265470/Mokepon/capipepo_m19axc.png', 5, 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265474/Mokepon/capipepo_face_jagagc.png')
let Ratigueya = new Mokepon('Ratigueya', 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265475/Mokepon/ratigueya_txr4ys.png', 5, 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265471/Mokepon/ratigueya_face_g759gx.png')
let Gargolin = new Mokepon('Gargolin', 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265473/Mokepon/gargolin_face_pwc8fg.png', 5, 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265473/Mokepon/gargolin_face_pwc8fg.png')
let Tucapalma = new Mokepon('Tucapalma', 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265474/Mokepon/tucapalma_ok7b4y.png', 5, 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265472/Mokepon/tucapalma_face_gatsao.png')
let Pydos = new Mokepon('Pydos', 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265475/Mokepon/pydos_zkay55.png', 5, 'https://res.cloudinary.com/dlnwcr805/image/upload/v1709265472/Mokepon/pydos_face_y7uqse.png')


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
    sectionShowMap.style.display = 'none'
    selectAttackSection.style.display = 'none'
    restartSection.style.display = 'none'
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
    if (radioHipodoge.checked) {
        spanPetPlayer.innerHTML = radioHipodoge.id
        petPlayer = radioHipodoge.id
    } else if (radioCapipepo.checked) {
        spanPetPlayer.innerHTML = radioCapipepo.id
        petPlayer = radioCapipepo.id
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
        return
    }
    selectPetSection.style.display = 'none'
    extractAttack(petPlayer)
    rivals()
    buttonPet.disabled = true
    radioHipodoge.disabled = true
    radioCapipepo.disabled = true
    radioRatigueya.disabled = true
    radioGargolin.disabled = true
    radioTucapalma.disabled = true
    radioPydos.disabled = true
    sectionShowMap.style.display = 'flex'
    starMap()
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
            ct++
            combat()
        })

    })

}
function selectPetEnemy(enemy) {
    spanPetEnemy.innerHTML = enemy.name
    petEnemy = enemy.name
    enemyMokeponAttack = enemy.attacks
    console.log(enemyMokeponAttack)
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
            setTimeout(() => { createFinalMessage('CONGRATS YOU WON MOKEPON GAME 🔮🎇') }, 20);
        } else if (winEnemy > winPlayer) {
            setTimeout(() => { createFinalMessage('GAME OVER ❌ YOU LOST MOKEPON GAME') }, 20);
        } else {
            setTimeout(() => { createFinalMessage('😐 YOU DRAW 😐') }, 20);
        }
    }
}
function createFinalMessage(finalResult) {
    finalMessages.innerHTML = finalResult
    restartSection.style.display = 'block'
}
function createMessage(result) {
    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')
    let newResult = document.createElement('p')
    newPlayerAttack.innerHTML = indexPlayerAttack
    newEnemyAttack.innerHTML = indexEnemyAttack
    newResult.innerHTML = result
    if (result === 'WIN') {
        newResult.style.background = '#557C55'
    } else if ((result === 'LOSE')) {
        newResult.style.background = '#F05454'
    } else {
        newResult.style.background = '#001B79'
    }
    playersAttack.appendChild(newPlayerAttack);
    enemysAttack.appendChild(newEnemyAttack);
    sectionMessages.appendChild(newResult);
}
function saveCombat(player, enemy) {
    indexPlayerAttack = attacksPlayer[player]
    indexEnemyAttack = randomEnemyAttack[enemy]

}
function combat() {
    if (attacksPlayer[ct] == randomEnemyAttack[ct]) {
        saveCombat(ct, ct)
        createMessage('DRAW')
    } else if ((attacksPlayer[ct] == 'Fire' && randomEnemyAttack[ct] == 'Earth') || (attacksPlayer[ct] == 'Water' && randomEnemyAttack[ct] == 'Fire') || (attacksPlayer[ct] == 'Earth' && randomEnemyAttack[ct] == 'Water')) {
        saveCombat(ct, ct)
        createMessage('WIN')
        winPlayer++
        spanplayerLives.innerHTML = winPlayer
    } else {
        saveCombat(ct, ct)
        createMessage('LOSE')
        winEnemy++
        spanenemyLives.innerHTML = winEnemy
    }
    //Revisar Vidas
    reviewVictories()
}
function getMokeponObject(pet) {
    for (let i = 0; i < mokepones.length; i++) {
        if (pet === mokepones[i].name) {
            return mokepones[i]
        }
    }
}
function rivals() {
    mokepones.forEach((mokepon) => {
        if (mokepon.name !== petPlayer) {
            rivalsMokepon.push(mokepon)
        }
    })
}
function drawCanvas() {
    myMokepon.x = myMokepon.x + myMokepon.speedX
    myMokepon.y = myMokepon.y + myMokepon.speedY
    canvas.clearRect(0, 0, map.width, map.height)
    canvas.drawImage(
        backgroundMap,
        0,
        0,
        map.width,
        map.height
    )
    myMokepon.drawMokepon()
    for (let i = 0; i < rivalsMokepon.length; i++) {
        rivalsMokepon[i].drawMokepon();
    }
    switch (myMokepon.name) {
        case 'Capipepo':
            checkCollision(Ratigueya, myMokepon)
            checkCollision(Tucapalma, myMokepon)
            checkCollision(Gargolin, myMokepon)
            checkCollision(Hipodoge, myMokepon)
            checkCollision(Pydos, myMokepon)
            break;
        case 'Ratigueya':
            checkCollision(Capipepo, myMokepon)
            checkCollision(Tucapalma, myMokepon)
            checkCollision(Gargolin, myMokepon)
            checkCollision(Hipodoge, myMokepon)
            checkCollision(Pydos, myMokepon)
            break;
        case 'Tucapalma':
            checkCollision(Capipepo, myMokepon)
            checkCollision(Ratigueya, myMokepon)
            checkCollision(Gargolin, myMokepon)
            checkCollision(Hipodoge, myMokepon)
            checkCollision(Pydos, myMokepon)
            break;
        case 'Gargolin':
            checkCollision(Capipepo, myMokepon)
            checkCollision(Ratigueya, myMokepon)
            checkCollision(Tucapalma, myMokepon)
            checkCollision(Hipodoge, myMokepon)
            checkCollision(Pydos, myMokepon)
            break;
        case 'Hipodoge':
            checkCollision(Capipepo, myMokepon)
            checkCollision(Ratigueya, myMokepon)
            checkCollision(Tucapalma, myMokepon)
            checkCollision(Gargolin, myMokepon)
            checkCollision(Pydos, myMokepon)
            break;
        case 'Pydos':
            checkCollision(Capipepo, myMokepon)
            checkCollision(Ratigueya, myMokepon)
            checkCollision(Tucapalma, myMokepon)
            checkCollision(Hipodoge, myMokepon)
            checkCollision(Gargolin, myMokepon)
            break;

        default:
            break;
    }
}
function mokeponRight() {
    myMokepon.speedX = 5
}
function mokeponLeft() {
    myMokepon.speedX = - 5
}
function mokeponUp() {
    myMokepon.speedY = - 5
}
function mokeponDown() {
    myMokepon.speedY = 5
}
function stopMove() {
    myMokepon.speedX = 0
    myMokepon.speedY = 0
}
function pushedKey(event) {
    switch (event.key) {
        case 'ArrowUp':
            mokeponUp()
            break;
        case 'ArrowDown':
            mokeponDown()
            break;
        case 'ArrowRight':
            mokeponRight()
            break;
        case 'ArrowLeft':
            mokeponLeft()
            break;
        default:
            break;
    }
}
function starMap() {
    myMokepon = getMokeponObject(petPlayer)
    myMokepon.x = 0
    myMokepon.y = 0
    interval = setInterval(drawCanvas, 50)
    window.addEventListener('keydown', pushedKey)
    window.addEventListener('keyup', stopMove)
}
function checkCollision(enemy, pet) {
    const upEnemy = enemy.y
    const downEnemy = enemy.y + enemy.height
    const leftEnemy = enemy.x
    const rightEnemy = enemy.x + enemy.width
    const upPet = pet.y
    const downPet = pet.y + pet.height
    const leftPet = pet.x
    const rightPet = pet.x + pet.width
    if (
        downPet < upEnemy ||
        upPet > downEnemy ||
        rightPet < leftEnemy ||
        leftPet > rightEnemy
    ) { return }
    stopMove()
    selectAttackSection.style.display = 'flex'
    sectionShowMap.style.display = 'none'
    clearInterval(interval)
    selectPetEnemy(enemy)
    
}


window.addEventListener('load', startGame)
