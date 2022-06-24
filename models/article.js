const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    student: {
        type: String,
        required: true
    }, test1: {
        type: Number,
        required: true
    }, test2: {
        type: Number,
        required: true
    }, test3: {
        type: Number,
        required: true
    }, test4: {
        type: Number,
        required: true
    }, test5: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Article', articleSchema)