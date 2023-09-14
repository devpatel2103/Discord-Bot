const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('apex')
        .setDescription('Recieve a random challenge for Apex Legends'),
    async execute(interaction) {

        function random(max) {
            return Math.floor(Math.random() * max);
        }

        const challenges = [
            "Get the most kills out of your team",
            "Get at least 5 kills in one game",
            "Win a game",
            "Win a game as kill leader",
            "Get 2k damage",
            "Play a support character for 2 games",
            "Play Gibby"
        ]

        return interaction.reply(challenges[random(challenges.length)])


    }
}