const { Client, GatewayIntentBits, Events } = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const config = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.commands = new Map();
const prefix = config.prefix;

// Load Commands
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}
client.cooldowns = new Map();


client.once(Events.ClientReady, () => {
  console.log(chalk.green(`Logged in as ${client.user.tag}`));
});

client.on(Events.MessageCreate, message => {
  if (message.author.id !== client.user.id) return;
const cooldownAmount = (command.cooldown || 0) * 1000;
if (cooldownAmount) {
  if (!client.cooldowns.has(cmdName)) client.cooldowns.set(cmdName, new Map());

  const timestamps = client.cooldowns.get(cmdName);
  const now = Date.now();
  const expiration = timestamps.get(message.author.id) + cooldownAmount;

  if (timestamps.has(message.author.id)) {
    if (now < expiration) {
      const left = ((expiration - now) / 1000).toFixed(1);
      return message.channel.send(`Please wait ${left}s before reusing \`${cmdName}\`.`);
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}


  // Message Logging
  console.log(`[${moment().format('HH:mm:ss')}] ${message.author.username}: ${message.content}`);

  // Auto Reply
  if (config.autoReply && message.mentions.has(client.user)) {
    message.reply(config.autoReplyMessage).catch(() => {});
  }

  // Command Handling
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmdName = args.shift().toLowerCase();

  const command = client.commands.get(cmdName);
  if (command) {
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.channel.send('Error executing command.');
    }
  }
});

client.login(config.token);
