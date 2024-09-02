#!/usr/bin/env node


import chalk from 'chalk';
import figlet from 'figlet';

// Function to center-align text based on the terminal width
const centerText = (text, width) => {
    const lines = text.split('\n'); // Split the text into individual lines
    return lines.map(line => {
        const padding = Math.max(0, Math.floor((width - line.length) / 2)); // Calculate padding for center alignment
        return ' '.repeat(padding) + line; // Add padding to the beginning of each line
    }).join('\n'); // Join lines back into a single string
};

// Get terminal width
const getTerminalWidth = () => {
    return process.stdout.columns || 80; // Return terminal width or default to 80 if not available
};

// Display the title with colored figlet text
console.log(chalk.green(figlet.textSync('Full Stack Developer!', { font: 'Small', horizontalLayout: 'full' })));

// Introduction text
const intro = chalk.white('Hey, My name is ') +
    chalk.yellow('Kritagya Singh Chouhan. ') +
    chalk.white('I am a ') +
    chalk.yellow('Full Stack Developer ') +
    chalk.white('specializing in ') +
    chalk.yellow('JavaScript ') +
    chalk.white('and related technologies. ') +
    chalk.white(`I'm highly competent in creating intriguing user interfaces and proficient in various technologies. `) +
    chalk.white('Talking about my experience in the field of Development, I have worked at ') + 
    chalk.yellow('Cashe, ') +
    chalk.white('as a Web-Developer intern and presently I am contributing at ') + 
    chalk.yellow('Jio Platform Limited ') +
    chalk.white('to construct solid systems. I am an enthusiastic learner looking to contribute with the best of my capabilities.');

// Array of technologies to display in the Tech Stack section
const techStack = [
    'React', 'JavaScript', 'AngularJS', 'NodeJS', 'Express', 'MongoDB', 'Firebase', 
    'Bootstrap', 'HTML-CSS', 'MaterialUI', 'Tailwind'
];

// Calculate terminal width and column spacing
const terminalWidth = getTerminalWidth();
const columnSpacing = 4; // Space between columns
const maxColumnWidth = Math.floor((terminalWidth - columnSpacing) / 2); // Maximum width for each column

// Function to format tech stack into columns or single column based on terminal width
const formatTechStack = () => {
    const halfLength = Math.ceil(techStack.length / 2); // Split the tech stack array into two halves
    const leftColumn = techStack.slice(0, halfLength); // Left column items
    const rightColumn = techStack.slice(halfLength); // Right column items

    if (maxColumnWidth < 20) {
        // If the terminal width is too small, display the tech stack in a single column
        return techStack.map((tech, index) => `${chalk.white(index + 1 + '. ' + tech)}`).join('\n');
    }

    // Format as two columns if width allows
    return leftColumn.map((tech, index) => {
        const rightTech = rightColumn[index] ? rightColumn[index] : ''; // Get tech item for the right column, if available
        return `${chalk.white(index + 1 + '. ' + tech).padEnd(maxColumnWidth)}${chalk.white((index + halfLength + 1) + '. ' + rightTech)}`;
    }).join('\n');
};

// Print introduction and formatted tech stack
console.log(`${intro}\n\n${chalk.green(figlet.textSync('Tech Stack', { font: 'Small', horizontalLayout: 'full' }))}\n${formatTechStack()}`);

// Display "Connect with me" using figlet
console.log('\n' + chalk.green(figlet.textSync('Lets Connect', { font: 'Small', horizontalLayout: 'full' })));

// Function to display social handles and portfolio links with numbering
const displaySocialHandles = () => {
    console.log(chalk.white('1. Portfolio: ') + chalk.white('https://kritagya.in'));
    console.log(chalk.white('2. GitHub: ') + chalk.white('https://github.com/kritagya20'));
    console.log(chalk.white('3. X: ') + chalk.white('https://x.com/kritagyachouhan'));
    console.log(chalk.white('4. LinkedIn: ') + chalk.white('https://www.linkedin.com/in/kritagyachouhan'));
};

// Print social handles and portfolio links
displaySocialHandles();

// Display "Thank you!" centered
const thankYouMessage = chalk.white('-----') + chalk.green('Thank you!') + chalk.white('-----');
console.log('\n\n\n\n' + centerText(thankYouMessage, terminalWidth));
