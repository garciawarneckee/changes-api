const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the internet");
})

const server = app.listen(3000, () => { console.log("Server listening in port 3000"); })

module.exports = server;