require('dotenv').config()
const express = require('express')
const axios = require('axios')

// const PORT = process.env.PORT
const {PORT} = process.env // desestruturação

const ap = express()

app.use(express.json())

//GET /lembretes/1/observacoes
app.get(
    '/lembretes/:id/observacoes',
    (req, res) => {
        
    }
)

//:id = placeholder

//POST /lembretes/1/observacoes

app.post(
    '/lembretes/:id/observacoes',
    function(req, res) {

    }
)

app.listen(
    PORT,
    () => console(`Observações: ${PORT}`)
)