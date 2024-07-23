console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name)
    process.stdout.write('Your name is: ${name}\n');
});

process.stding.on('end', () => {
  console.log('This important software is now closing');
});
