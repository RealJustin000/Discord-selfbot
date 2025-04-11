module.exports = {
  name: 'help',
  description: 'Lists all commands',
  execute(message) {
    const commands = message.client.commands;
    let reply = '**Available Commands:**\n';
    commands.forEach(cmd => {
      reply += `\`${cmd.name}\`: ${cmd.description}\n`;
    });
    message.channel.send(reply);
  }
};
