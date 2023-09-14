const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('valorant')
        .setDescription('Recieve a random challenge for Valorant'),
    async execute(interaction) {

        function random(max) {
            return Math.floor(Math.random() * max);
        }

        const challenges = [
            "Win a game",
            "Only use the Sheriff",
            "Only use the Phantom",
            "Get Match MVP",
            "Get Team MVP",
            "Play Initiator",
            "Play Duelist"
        ]

        return interaction.reply(challenges[random(challenges.length)])


    }
}