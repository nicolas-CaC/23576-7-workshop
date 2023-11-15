import express from 'express'
import dotenv from 'dotenv'
import { resolve } from 'path'
import todosRoutes from './src/routes/todosRoutes.js'
import methodMiddleware from './src/middlewares/methodMiddleware.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

app.set('view engine', 'pug')
app.set('views', resolve() + '/src/views')

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(methodMiddleware)

app.use('/todos', todosRoutes)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))