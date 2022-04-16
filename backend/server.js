const express = require("express");
const chats = require("./dummydata/chat")

const app = express()

app.get('/', (req, res) => {
    res.end("Home page");
})

app.get('/api/chat', (req, res) => {
    res.json(chats);
})

app.listen(5000, () => {
    console.log("http://localhost:5000")
})