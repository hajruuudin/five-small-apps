const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {Middleware} = require('./utils/Middleware')
const taskRouter = require('./routes/taskRouter')
const listRouter = require('./routes/listRouter')

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/task-manager')
 .then(() => {
    console.log("Db Connection made to task-manager")
 })
 .catch((err) => {
    console.log(err)
    console.log("Error while connecting to mongo-db")
 })

app.use('/backend/tasks', taskRouter)
app.use('/backend/lists', listRouter)

app.get("/backend", Middleware.test, (req, res, next) => {
    res.send("<h1>Server is working</>")
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = "Oh no, something went wrong!";
    res.status(status).render('error', {err})
})

app.all("*", (req, res, next) => {
    next( new Error("ERROR SOMEWHERE"))
})

app.listen('8080', () => {
    console.log("Listening on port 8080 BACKEND")
})

