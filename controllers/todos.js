const Todos = require('../models/Todos')
const validator = require('../middlewares/inputValidator')

// fecth all todos
exports.getTodos = async function (req, res, next) {
    try {
        Todos.find({}, 'title description completed', function (err, todos) {
            if (err) return res.status(400).json({
                "message": "bad request"
            })
            res.status(200).json(
                todos
            )
        })
    } catch (error) {
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

// get a single todo by id
exports.getSingleTodo = async function (req, res, next) {
    try {
        const todoId = req.params.id
        Todos.find({
            _id: todoId
        }, 'title description completed', function (err, todo) {
            if (err) return res.status(404).json({
                "message": "todo not found"
            })
            res.status(200).json(todo)
        })
    } catch (error) {
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

// add a todo to the todos collection
exports.addTodo = async (req, res, next) => {
    try {
        const data = await req.body
        const todo = await Todos.create(data)
        if (!todo) return res.status(400).json({
            message: "bad request"
        })
        res.status(200).json(
            todo)
    } catch (error) {
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

// update a given todo
exports.updateTodo = async function (req, res, next) {
    try {
        const todoId = req.params.id
        const update = req.body
        const todo = await Todos.findByIdAndUpdate(todoId, update, {
            new: true
        })
        if (!todo) return res.status(404).json({
            "message": "bad request"
        })
        res.status(200).json({
            "message" : "updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}

// delete a todo from the database
exports.deleteTodo = async (req, res, next) => {
    try {
        const todoId = req.params.id
        const todo = await Todos.findByIdAndRemove(todoId)
        if (!todo) return res.status(404).json({
            "message": "todo not found"
        })
        res.status(200).json({
            "message": "deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            "message": "Internal server error"
        })
    }
}