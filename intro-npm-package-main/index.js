#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

const introText = `
${chalk.green(figlet.textSync('Welcome!', { horizontalLayout: 'full' }))}

${chalk.yellow(figlet.textSync('Kritagya Singh Chouhan', { horizontalLayout: 'full' }))}

${chalk.blue.bold('I am a web developer specializing in JavaScript and other technologies.')}

${chalk.magenta.bold('Feel free to contact me at your.email@example.com.')}
`;

console.log(introText);
