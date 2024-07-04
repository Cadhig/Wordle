# Wordle
This project is a remake of the popular NYT Wordle game. Users interact with a virtual keyboard to guess a hidden word, receiving feedback on their guesses in terms of letter correctness and position.

## Features
- Interactive virtual keyboard for user input
- Validation of guess length (max 5 characters)
- Visual feedbback on guess accuracy
- Dictionary API for word validity
- Game ending conditions based on the correct guess, or guess limit

## Tech Used
- JavaScript
- Node.js
- Express.js
- Tailwind CSS

# Getting Started
To run this project locally: <br>
- Clone this repo
- Run `npm install` in `/frontend` and `/backend`
- Run `npm start` in `/frontend` and `/backend`
- Create `.env` file in `/frontend/.env` fill with:
```env
BACKEND="http://127.0.0.1:3000"
```
## For Development
Run `npx tailwindcss -i ./public/input.css -o ./public/output.css --watch`
## Play Here:
https://wordleclone.up.railway.app/

