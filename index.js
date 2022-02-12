const { Client, Collection} = require('discord.js');
const client = new Client({ intents: 32767});
//const {Token} = require("./config.json");
const keepAlive = require("./Server");

client.commands = new Collection();

require("./Handle/EventCheck.js")(client);
require("./Handle/Commands.js")(client);



keepAlive();
client.login(process.env.Token);