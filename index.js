const { Client, Collection} = require('discord.js');
const client = new Client({ intents: 32767});
//const {Token} = require("./config.json");

client.commands = new Collection();

require("./Handle/EventCheck.js")(client);
require("./Handle/Commands.js")(client);

client.login(process.env.Token);