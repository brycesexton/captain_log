require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Ship = require('./models/ship')
const PORT = process.env.PORT || 3003
const app = express()

app.use(express.urlencoded({extended: true}))

//view engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

//mongo
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//port
app.listen(PORT, () => {
    console.log(`${PORT} is poppin`)
})


//index
//new
app.get('/new', (req, res) => {
    res.render('new')
})
//delete
//update
//create
app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } 
    else {
        req.body.shipIsBroken = false
    }
    try {
        const createdShip = await Ship.create(req.body)
        res.redirect(`/logs/${createdShip._id}`)
    } 
    catch(error) {
        res.status(400).send({message: error.message})
    }

    console.log(req.body)
    res.send(req.body)
})
//edit
//show