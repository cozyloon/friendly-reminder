#!/usr/bin/env node

import { format } from 'date-fns';
import chalk from 'chalk';

// List of friendly reminder messages
const reminderMessages = [
    "Stay hydrated!",
    "Time to stretch your legs.",
    "Take a deep breath and relax.",
    "Time for a short break?",
    "Remember to stay focused!",
    "Keep up the great work!",
    "Don’t forget to smile!",
    "Take a moment to appreciate your progress.",
    "Stay positive and keep going!",
    "It’s okay to take a break and recharge.",
    "Check your posture and adjust your chair.",
    "You’re doing an awesome job!",
    "Celebrate your small wins!",
    "Take a deep breath and refocus.",
    "Remember to set your priorities straight.",
    "Stay organized and plan your next steps.",
    "Keep your workspace tidy and inspiring.",
    "Stay motivated; you’ve got this!",
    "Think of one thing you’re grateful for today.",
    "Visualize your success and stay on track."
];

// Function to get a random reminder message
const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * reminderMessages.length);
    return reminderMessages[randomIndex];
};

// Function to show reminders at specified intervals
const showReminder = (interval) => {
    console.log(chalk.green(`Friendly Reminder initialized. Reminders will appear every ${interval} minutes.`));
    setInterval(() => {
        const time = format(new Date(), 'HH:mm:ss');
        console.log(chalk.green(`[${time}] ${getRandomMessage()}`));
    }, interval * 60 * 1000); // Convert minutes to milliseconds
};

// Parse interval argument from the command line (in minutes)
const intervalArg = process.argv[2];

// Check if the interval argument is provided and valid
let interval = parseInt(intervalArg);
if (isNaN(interval) || interval <= 0) {
    console.log(chalk.yellow("Invalid or missing interval argument. Using default interval of 60 minutes."));
    interval = 60;  // Default to 60 minutes if no valid interval is provided
}

// Start showing reminders
showReminder(interval);
