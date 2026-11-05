import express from 'express'
import database from './config/database.js'
import router from './router/user.js'
import routerprodutos from './router/produtos.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/user', router)
app.use('/api/v1/produtos', routerprodutos)


database.db
.sync({force: false})
.then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
})
.catch((e) => {
    console.log(e)
})