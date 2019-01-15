process.stdout.write('prompt > ');
const pwdReq = require('./pwd');
const lsReq = require('./ls');
const catReq = require('./cat');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let fileName = cmd.split(' ')[1];
  switch (cmd.split(' ')[0]) {
    case 'pwd':
      pwdReq();
      break;
    case 'ls':
      lsReq();
      break;
    case 'cat':
      catReq(fileName);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});
