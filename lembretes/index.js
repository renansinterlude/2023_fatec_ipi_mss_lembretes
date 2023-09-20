require('dotenv').config()
// usamos para definir endpoints
// para receber requisições http
const express = require('express')
// usamos para enviar requisições HTTP
const axios = require ('axios')

const app = express();

//middleware (funcao intermediária)
// função pra converter json pra javascript
app.use(express.json())

/*
  {
    "1": {"id": "1", "texto": "Fazer cafe"},
    "2": {"id": "1", "texto": "Fazer cafe"}
  }
*/

const lembretes = {}
let id = 1

//GET /lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

// POST /lembretes {texto: "Fazer cafe"}
app.post('/lembretes', (req, res) => {
    const texto = req.body.texto
    const lembrete = {id, texto}
    lembretes[id] = lembrete
    // lembretes[id] = {id: texto:}
    id++;
    // HTTP 201 Created
    res.status(201).send(lembretes)
})

app.listen(
    process.env.PORT,
    () => console.log(`Lembretes: ${process.env.PORT}`)
)