require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
// const Fruit = require('./models/fruit')
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
//edit
//show