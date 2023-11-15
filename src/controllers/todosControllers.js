import services from './../services/todosServices.js'

const getTodos = (req, res) => {

    if (req.query?.id) {
        const todo = services.getTodo(req.query)
        res.json(todo)
    }
    else {
        const todos = services.getTodos()
        res.render('todos/todos', todos)
    }
}


const postTodo = (req, res) => {
    const todos = services.postTodo(req.body)
    res.render('todos/todos', todos)
}


const updTodo = (req, res) => {
    const todos = services.updateTodo(req.params.id, req.body.task)
    res.render('todos/todos', todos)
}


const patchTodo = (req, res) => {
    const todos = services.updateTask(req.params.id)
    res.render('todos/todos', todos)
}


const delTodo = (req, res) => {
    const todos = services.deleteTodo(req.params.id)
    res.render('todos/todos', todos)
}

const controllers = {
    getTodos,
    postTodo,
    updTodo,
    patchTodo,
    delTodo
}

export default controllers