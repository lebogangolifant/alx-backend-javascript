process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

function handleInput(input) {
  const name = input.trim();
  if (name) {
    console.log(`Your name is: ${name}`);
  }
}

process.stdin.on('data', handleInput);

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
