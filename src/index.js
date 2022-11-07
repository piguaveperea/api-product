'use strict'

const express = require('express');
const app = express();
const db = require('./connetion_db')
const config = require('./config')
const bodyParser = require('body-parser')

//APIS
const api = require('./apis')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/api', api.API_PRODUCT)


app.listen(config.PORT, () => {
    db.authenticate()
    .then(() => { console.log('conexión exitosa') })
    .catch(error => console.log(error))
    console.log(`El servidor esta en el usando el pueto: ${config.PORT}`)
})
