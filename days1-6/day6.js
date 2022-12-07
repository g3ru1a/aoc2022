const fs = require('fs');

function findStartOfPacket(buffer) {
    // Keep track of the four most recent characters
    const mostRecent = [];

    // Loop through the characters in the buffer
    for (let i = 0; i < buffer.length; i++) {

        // If we have four characters, check if they are all different
        if (mostRecent.length === 14) {
            if (allDifferent(mostRecent)) {
                // If they are all different, return the position of the first character in the sequence
                return i;
            }
        }

        // Add the current character to the list of most recent characters
        mostRecent.push(buffer[i]);

        // If we have more than four characters, remove the oldest character
        if (mostRecent.length > 14) {
            mostRecent.shift();
        }
    }

    // If we reach the end of the buffer without finding a start-of-packet marker, return -1
    return -1;
}

function allDifferent(characters) {
    // Loop through the characters in the list
    for (let i = 0; i < characters.length; i++) {
        // Check if the current character is in the list of remaining characters
        if (characters.slice(i + 1).includes(characters[i])) {
            // If it is, return false
            return false;
        }
    }

    // If we reach the end of the list without finding a repeated character, return true
    return true;
}

// Example
const buffer = fs.readFileSync('input6.txt', 'utf8');
const position = findStartOfPacket(buffer);
console.log(position);  // Output: 7
