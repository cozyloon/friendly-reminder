# Friendly Reminder

[![npm version](https://badge.fury.io/js/friendly-reminder.svg)](https://www.npmjs.com/package/friendly-reminder)

**Friendly Reminder** is a simple command-line tool that displays random motivational or self-care reminders at regular intervals in your terminal. Use it to stay productive and mindful while you work!

## Features

- Random friendly reminder messages.
- Configurable reminder interval.
- Lightweight and easy to use.

## Installation

You can install the package globally using npm:

```bash
npm install -g friendly-reminder
```

## Usage
Run the friendly-reminder command in your terminal to start receiving reminders. By default, reminders appear every 1 hour (3600000 milliseconds).

```bash
friendly-reminder
```

## Custom Interval
You can pass a custom interval (in milliseconds) to the command. For example, to set a reminder every 10 minutes (600000 milliseconds):

```bash
friendly-reminder 600000
```

## Example
Run the following command for reminders every 15 minutes:

```bash
friendly-reminder 900000
```

This will output reminders like:
```
[14:30:22] Stay hydrated!
[14:45:22] Take a deep breath and relax.
[15:00:22] Time to stretch your legs.
```

## License
ISC License
