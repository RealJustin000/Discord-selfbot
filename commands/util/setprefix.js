const fs = require('fs');
const config = require('../../config.json');

module.exports = {
  name: 'setprefix',
  description: 'Change the command prefix',
  execute(message, args) {
    const newPrefix = args[0];
    if (!newPrefix) return message.channel.send('Please provide a new prefix.');
    config.prefix = newPrefix;
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
    message.channel.send(`Prefix changed to \`${newPrefix}\``);
  }
};
