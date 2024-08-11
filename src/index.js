import express from 'express'
import cors from 'cors'
import user from './routes/user.js' // Импорт маршрутов
import tasks from './routes/tasks.js'

const app = express()
const port = 3010
const crsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Tg-Auth', 'Cookies'],
}
app.use(cors(crsOptions))

app.use('/', user) // Использование маршрутов
app.use('/', tasks)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

export default app
