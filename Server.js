 
const express = require("express")

const request = require('request');
const cherio = require('cherio');
const fs = require('fs');


const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function Server() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

var WriteStream  = fs.createWriteStream("vi.lang", "UTF-8");
WriteStream.write("\n");




module.exports = Server
 