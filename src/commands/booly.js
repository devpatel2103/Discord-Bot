const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('booly')
        .setDescription('Booly anyone in the server'),
    async execute(interaction) {

        
        return interaction.reply('no')
    }
}