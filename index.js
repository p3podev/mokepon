const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors()) //elimina errores de cors   
app.use(express.json()) //Permite recibir datos Json a traves de POST 
const players = []
class Player {
    constructor(id) {
        this.id = id
    }
    allocateMokepon(mokepon) {
        this.mokepon = mokepon
    }
    locationMokepon(x, y) {
        this.x = x
        this.y = y
    }
    allocateAttacks(attacks) {
        this.attacks = attacks
    }
}
class Mokepon {
    constructor(name) {
        this.name = name
    }

}
app.get("/join", (req, res) => {
    const id = `${Math.random()}`
    const player = new Player(id)
    players.push(player)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})
app.post("/mokepon/:playerId", (req, res) => { //: en express define una variable en este caso el Id del Jugador
    const playerId = req.params.playerId || "" //con req obtienes los datos de la URL y params los parametros
    //extraer del cuerpo de lo que mando el usuario en este caso el nombre del mokepon
    const nameMokepon = req.body.mokepon || ""
    const mokepon = new Mokepon(nameMokepon)
    const playerIndex = players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0) {
        players[playerIndex].allocateMokepon(mokepon)
    }

    console.log(players)
    console.log(playerId)
    res.end() //Finalizo la peticion con res.end()
})
app.post("/mokepon/:playerId/location", (req, res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const playerIndex = players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0) {
        players[playerIndex].locationMokepon(x, y)
    }
    const enemies = players.filter((player) => playerId !== player.id)
    //enviar lista de enemigos
    res.send({
        enemies
    })
})

app.post("/mokepon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || ""
    const attacks = req.body.attacks || []
    const playerIndex = players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0) {
        players[playerIndex].allocateAttacks(attacks)
    }
})
app.get("/mokepon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || ""
    const player = players.find((player) => playerId === player.id)
    res.send({
        attacks: player.attacks || []
    })
})


app.listen(8081, () => {
    console.log("Server Work")
})