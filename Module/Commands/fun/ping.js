const {CommandInteraction , MessageEmbed} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Pong!',
    permission: "ADMINISTRATOR",
    execute(interaction, client){
        interaction.reply({embeds: [
            new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`🏓 Pong!`)
        ]});
    }
}