const express = require('express')
const mongoose = require('mongoose')
const {Middleware} = require('./utils/Middleware')

const app = express();

const dbConnection = mongoose.connect('mongodb://localhost:27017/task-manager')
 .then(() => {
    console.log("Db Connection made to task-manager")
 })
 .catch((err) => {
    console.log(err)
    console.log("Error while connecting to mongo-db")
 })


app.get("/", Middleware.test, (req, res, next) => {
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

