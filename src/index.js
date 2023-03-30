#!/usr/bin/env node
const { exec } = require('child_process');
const gitComment = process.argv[2] || '';
exec(`git add .;git commit -m "${gitComment}";git push;`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令出错: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});