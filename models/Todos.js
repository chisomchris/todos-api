const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Todos', TodoSchema)