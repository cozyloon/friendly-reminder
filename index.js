#!/usr/bin/env node

const { format } = require('date-fns');

const reminderMessages = [
    "Stay hydrated!",
    "Time to stretch your legs.",
    "Take a deep breath and relax.",
    "Time for a short break?",
    "Remember to stay focused!"
];

const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * reminderMessages.length);
    return reminderMessages[randomIndex];
};

const showReminder = (interval) => {
    console.log("Friendly Reminder initialized...");
    setInterval(() => {
        const time = format(new Date(), 'HH:mm:ss');
        console.log(`[${time}] ${getRandomMessage()}`);
    }, interval);
};

module.exports = { showReminder };
