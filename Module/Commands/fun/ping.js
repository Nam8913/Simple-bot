const {CommandInteraction} = require('discord.js');

module.exports ={
  name:'Ping',
  description:"Pong!",
  permission: "ADMINISTRATOR",
  execute(interaction){
    interaction.reply({content:"Pong!"})
  }
}