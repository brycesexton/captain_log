require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Log = require('./models/logs')
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
app.get('/logs', async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        res.render('logs/Index', {
            logs: foundLogs
        })
    }
    catch(error) {
        res.status(400).send({message: error.message})
    }
    res.render('index')
})

//new
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
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
        const createdLog = await Log.create(req.body)
         res.redirect(`/logs/${createdLog._id}`)
    } 
    catch(error) {
        res.status(400).send({message: error.message})
    }
  
    console.log(req.body)
  })
//edit
//show
app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('logs/Show', {
        log: foundLog
        })
    }
    catch(error) {
        res.status(400).send({ message: error.message })
    }
})