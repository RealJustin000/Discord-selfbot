module.exports = {
  name: 'clear',
  description: 'Delete a number of messages',
  async execute(message, args) {
    const amount = parseInt(args[0]);
    if (!amount || amount < 1 || amount > 100) return message.channel.send('Enter a number between 1 and 100.');
    const messages = await message.channel.messages.fetch({ limit: amount });
    messages.forEach(msg => {
      if (msg.author.id === message.author.id) msg.delete().catch(() => {});
    });
  }
};
