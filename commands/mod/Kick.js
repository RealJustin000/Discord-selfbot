module.exports = {
  name: 'kick',
  description: 'Kick a user (selfbot use only affects UI)',
  execute(message, args) {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send('Mention a user to kick.');
    message.channel.send(`Pretending to kick ${user.tag}... (not actually possible with selfbots)`);
  }
};
