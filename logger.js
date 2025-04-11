const fs = require('fs');
const moment = require('moment');

module.exports = function logToFile(msg) {
  const log = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag}: ${msg.content}\n`;
  fs.appendFileSync('chatlog.txt', log, 'utf8');
};
