module.exports = {
  name: '8ball',
  description: 'Ask the magic 8ball a question!',
  execute(message, args) {
    const responses = [
      'Yes.', 'No.', 'Maybe.', 'Definitely.', 'Absolutely not.',
      'I have no idea.', 'Ask again later.', 'Of course!', 'No way.'
    ];
    const question = args.join(' ');
    if (!question) return message.channel.send('You need to ask a question!');
    const answer = responses[Math.floor(Math.random() * responses.length)];
    message.channel.send(`🎱 ${answer}`);
  }
};
