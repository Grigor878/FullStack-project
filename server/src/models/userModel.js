const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

mongoose.exports = mongoose.model('User', userSchema)