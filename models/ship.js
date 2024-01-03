const mongoose = require('mongoose')

const shipSchema = new mongoose.Schema({
    name: { type: String, require: true },
    color: { type: String, require: true },
    shipIsBroken: Boolean
})

const Ship = mongoose.model('Ship', shipSchema)

module.exports = Ship