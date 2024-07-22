const execSync = require('child_process').execSync;

execSync('GIT_USER=ifedolapo-9 yarn deploy', {
  stdio: 'inherit',
});