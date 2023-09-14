require('dotenv').config();

const { Client, IntentsBitField, Collection } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMembers
    ]
})

const fs = require('node:fs');
const path = require('node:path')

// Loads the event files on startup 
const eventsPath = path.join(__dirname, "events")
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'))

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file)
    const event = require(filePath)
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
}

// loads the command files on startup
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFile = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFile) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`command at ${filePath} is missing a required "data" or "execute" property `)
    }
}

client.login(process.env.TOKEN);