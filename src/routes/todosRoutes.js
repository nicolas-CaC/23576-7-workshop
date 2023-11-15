import express from 'express'
import controllers from './../controllers/todosControllers.js'

const router = express.Router()

router
    .get('/', controllers.getTodos)
    .post('/', controllers.postTodo)
    .put('/:id', controllers.updTodo)
    .patch('/:id', controllers.patchTodo)
    .delete('/:id', controllers.delTodo)


export default router