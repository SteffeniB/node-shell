process.stdout.write('prompt > ');
const pwdReq = require('./pwd');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwdReq();
  }
});
