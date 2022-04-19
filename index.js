const express = require('express')
const app = express()

const villages = ['Calatayud', 'Baiona']
const mountains = ['Everest', 'Monte Perdido']

/**
 * 
 * params:
 *    - category (mandatory)
 *    - query (optional)
 */
app.get('/buscar', function (req, res) {
    // comprobamos que nos estamos los parámetros
    // obligatorios
    if (!req.query.category) {
        res.sendStatus(400)
        return
    }

    // devolvemos unos datos u otros en función del valor de category
    if (req.query.category === 'mountains') {
        let filteredMountains = mountains;

        if (req.query.query) {
            filteredMountains = mountains.filter(mountain => mountain.toLowerCase().includes(req.query.query.toLowerCase()))
        }
        
        res.send(filteredMountains)

    } else if (req.query.category === 'villages') {
        let filteredVillages = villages;

        if (req.query.query) {
            filteredVillages = villages.filter(village => village.toLowerCase().includes(req.query.query.toLowerCase()))
        }

        res.send(filteredVillages)
    } else {
        res.sendStatus(404)
    }
})

// Crea un endpoint en la URL /
app.get('/', function (req, res) {
    res.send('Hello World!!!!!')
})

// 4000 es el puerto
app.listen(4000)

