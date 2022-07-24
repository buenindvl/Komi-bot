const { MessageEmbed, MessageActionRow, MessageButton, MessageCollector } = require("discord.js")

module.exports = async (client, interaction) => {
  interaction.reply(`Ping: ${client.ws.ping}`)
}