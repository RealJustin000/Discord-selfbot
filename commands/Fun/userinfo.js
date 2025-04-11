module.exports = {
  name: 'userinfo',
  description: 'Shows your user info',
  execute(message) {
    const user = message.author;
    message.channel.send(
      `**User Info:**\nUsername: ${user.username}\nID: ${user.id}\nCreated: ${user.createdAt}`
    );
  }
};
