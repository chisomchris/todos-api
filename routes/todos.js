const router = require('express').Router()
const controller = require('../controllers/todos')

router
    .get('/', controller.getTodos)
    .post('/', controller.addTodo)
    .get('/:id', controller.getSingleTodo)
    .put('/:id', controller.updateTodo)
    .delete('/:id', controller.deleteTodo);

module.exports = router