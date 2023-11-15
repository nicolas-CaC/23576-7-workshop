const titulo = 'ToDos'

let todos = [
    {
        id: 1,
        task: 'Preparar el desayuno',
        complete: false
    },
    {
        id: 2,
        task: 'Preparar el almuerzo',
        complete: false
    },
    {
        id: 3,
        task: 'Preparar la merienda',
        complete: false
    }
]

let ids = todos.length



const getTodos = () =>
    ({ titulo, todos, code: 0 })



const getTodo = ({ id }) => {

    const found = todos.find(todo => todo.id === parseInt(id))

    return found === undefined
        ? { error: `No existe todo con el id ${id}` }
        : found
}



const postTodo = ({ task }) => {

    const todo = {
        id: ++ids,
        task,
        complete: false
    }

    todos.push(todo)

    return { titulo, todos, code: 1 }
}



const updateTodo = (id, task) => {

    let code = 2

    todos.forEach((todo, index) => {

        if (todo.id === parseInt(id)) {
            todos[index].task = task
            code = 1
        }
    })

    return { titulo, todos, code }
}



const updateTask = (id) => {

    let code = 2

    todos.forEach((todo, index) => {

        if (todo.id === parseInt(id)) {
            todos[index].complete = !todos[index].complete
            code = 1
        }
    })

    return { titulo, todos, code }
}



const deleteTodo = (id) => {

    const newTodoList = todos.filter(todo => todo.id !== parseInt(id))

    if (newTodoList.length === todos.length)
        return { titulo, todos, code: 2 }

    todos = newTodoList
    return { titulo, todos, code: -1 }
}



const services = {
    getTodos,
    getTodo,
    postTodo,
    updateTodo,
    updateTask,
    deleteTodo
}

export default services