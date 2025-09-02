process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const username = input.toString();
  process.stdout.write(`Your name is: ${username}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
