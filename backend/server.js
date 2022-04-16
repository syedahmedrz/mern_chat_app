const express = require("express");
const chats = require("./dummydata/chat")
require("dotenv").config()

const app = express()

app.get('/', (req, res) => {
    res.end("Home page");
})

app.get('/api/chat', (req, res) => {
    res.json(chats);
})


app.get('/api/chat/:id', (req, res) => {
    let chat = chats.find((c)=>c._id == req.params.id)
    res.json(chat)
})

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})