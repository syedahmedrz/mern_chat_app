const express = require("express");
const chats = require("./dummydata/chat")
require("dotenv").config({
    path: "../.env"
})
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');

connectDB()
const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
    res.end("Home page");
})

app.use("/api/user", userRoutes)

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})