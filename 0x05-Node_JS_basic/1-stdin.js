#!/usr/bin/node

const readLine = require('readline');

const line = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

line.question('Welcome to Holberton School, what is your name?\n', name =>{
  console.log(`Your name is: ${name}`);
});

process.on('beforeExit', ()=>{
    console.log('This important software is now closing');
});
