process.stdin.setEncoding('utf8');

console.log("Welcome to Holberton School, what is your name?");

// Variable to track whether input is piped
let isPipedInput = !process.stdin.isTTY;

// Function to handle user input
function handleInput(input) {
    const name = input.trim();
    if (name) {
        console.log(`Your name is: ${name}`);
        if (isPipedInput) {
            console.log("This important software is now closing");
            process.exit();
        } else {
            process.stdin.pause(); // Pause stdin stream to terminate interactive mode
        }
    }
}

process.stdin.on('data', handleInput);

// Listen for 'end' event of standard input stream
process.stdin.on('end', () => {
    console.log("This important software is now closing");
    process.exit(); // Exit the program when the pipe input stream ends
});
