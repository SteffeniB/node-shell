process.stdout.write('prompt > ');
const pwdReq = require('./pwd');
const lsReq = require('./ls');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      pwdReq();
      break;
    case 'ls':
      lsReq();
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});
