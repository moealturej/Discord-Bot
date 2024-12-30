const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// When the bot is ready
client.once('ready', () => {
  console.log('Bot is online!');
});

// When the bot receives a message
client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Log in with your Discord bot token
client.login('MTI3MTc1MjgzNDg2OTYyNDg4Mg.GbQ0EZ.F_wEL9v3A9thePxE6mEaMT-yKDWEu72GtqBdWU');