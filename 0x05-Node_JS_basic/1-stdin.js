#!/usr/bin/node
// A program that interacts with the user through the command line

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log('Your name is: ${name}');
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
