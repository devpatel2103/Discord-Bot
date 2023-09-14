const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rl')
        .setDescription('Recieve a random challenge for Rocket League'),
    async execute(interaction) {

        function random(max) {
            return Math.floor(Math.random() * max);
        }

        const challenges = [
            "Get team MVP",
            "Get at least 2 goal",
            "Win a competitive match",
            "Get at least 3 saves in one game",
            "Get 600+ score in one game",
            "Use Merc for 3 games",
            "Play 2 comp duel matches"
        ]

        return interaction.reply(challenges[random(challenges.length)])

    }
}