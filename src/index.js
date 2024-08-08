import express from 'express'
import cors from 'cors'
import routes from './routes/user.js' // Импорт маршрутов

const app = express()
const port = 3010
app.use(cors())

app.use('/', routes) // Использование маршрутов

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
