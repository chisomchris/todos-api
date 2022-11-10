const express = require('express')
const api = express()
const PORT = process.env.PORT || 3000

const todosRouter = require('./routes/todos')

const {
    json
} = express

const {
    config
} = require('dotenv')
config()

const connectDB = require('./mongoDB/connect')
connectDB(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongoDB successfully")
    api.listen(PORT, () => {
        console.log('server up and running on ' + PORT)
    })
})

api.get('/', (req, res) => {
    res.redirect('/todos')
})

api.use('/todos',json(), todosRouter)