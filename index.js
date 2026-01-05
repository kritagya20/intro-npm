#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

// Center align text based on terminal width
const centerText = (text, width) => {
  const lines = text.split("\n");
  return lines
    .map(line => {
      const padding = Math.max(0, Math.floor((width - line.length) / 2));
      return " ".repeat(padding) + line;
    })
    .join("\n");
};

const getTerminalWidth = () => process.stdout.columns || 80;

// Title
console.log(
  chalk.green(
    figlet.textSync("SDET & QA Engineer", {
      font: "Small",
      horizontalLayout: "full",
    })
  )
);

// Updated Introduction
const intro =
  chalk.white("Hey there! I'm ") +
  chalk.yellow("Kritagya Singh Chouhan") +
  chalk.white(
    ", a detail-driven " +
      "Software Development Engineer in Test (SDET) and Automation Engineer. "
  ) +
  chalk.white(
    "I specialize in building robust automation frameworks " +
      "for web and mobile applications, improving product quality through strong QA practices, "
  ) +
  chalk.white(
    "and integrating automated testing into CI/CD pipelines. My experiences in development help me write "
  ) +
  chalk.white(
    "smarter automation and solve complex quality challenges with elegant solutions."
  );

// Updated Tech Stack
const techStack = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Selenium WebDriver",
  "Playwright",
  "Cypress",
  "Appium",
  "Jest",
  "Mocha",
  "Chai",
  "REST API Testing",
  "Postman",
  "Git",
  "CI/CD (GitHub Actions/Jenkins)",
  "Docker",
];

// Format columns for tech stack
const terminalWidth = getTerminalWidth();
const columnSpacing = 4;
const maxColumnWidth = Math.floor((terminalWidth - columnSpacing) / 2);

const formatTechStack = () => {
  const halfLength = Math.ceil(techStack.length / 2);
  const leftColumn = techStack.slice(0, halfLength);
  const rightColumn = techStack.slice(halfLength);

  if (maxColumnWidth < 20) {
    return techStack
      .map((tech, index) => chalk.white(`${index + 1}. ${tech}`))
      .join("\n");
  }

  return leftColumn
    .map((tech, index) => {
      const rightTech = rightColumn[index] ? rightColumn[index] : "";
      return `${chalk.white(index + 1 + ". " + tech).padEnd(
        maxColumnWidth
      )}${chalk.white((index + halfLength + 1) + ". " + rightTech)}`;
    })
    .join("\n");
};

// Print intro & tech stack
console.log(`${intro}\n\n${chalk.green(
  figlet.textSync("Tech Stack", {
    font: "Small",
    horizontalLayout: "full",
  })
)}\n${formatTechStack()}`);

// Connect with me
console.log(
  "\n" +
    chalk.green(
      figlet.textSync("Connect With Me", {
        font: "Small",
        horizontalLayout: "full",
      })
    )
);

const displaySocialHandles = () => {
  console.log(
    chalk.white("1. Portfolio: ") + chalk.cyan("https://kritagya20.github.io/portfolio-website-react/")
  );
  console.log(
    chalk.white("2. GitHub: ") + chalk.cyan("https://github.com/kritagya20")
  );
  console.log(
    chalk.white("3. X (Twitter): ") +
      chalk.cyan("https://x.com/kritagyachouhan")
  );
  
  console.log(
    chalk.white("4. Medium: ") +
      chalk.cyan("https://medium.com/@kritagya2022")
  );
  console.log(
    chalk.white("5. LinkedIn: ") +
      chalk.cyan("https://www.linkedin.com/in/kritagyachouhan")
  );
  console.log(chalk.white("6. Email: ") + chalk.cyan("kritagya2022@gmail.com"));
};

displaySocialHandles();

// Thank you message
const thankYouMessage =
  chalk.white("-----") + chalk.green(" Thank you! ") + chalk.white("-----");
console.log("\n\n" + centerText(thankYouMessage, terminalWidth));
