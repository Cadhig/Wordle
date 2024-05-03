# Wordle
A remake of the NYT Wordle browser game.

## Description
This project is a full stack project, It contains both the backend and frontend directories.
This project uses `nodemon` to keep the servers running and auto-restarting. 
This project uses `express` to serve frontend and backend.
This project hosts the frontend/static assets in the `frontend/public` directory
The backend expects the body content to be `JSON`

## How to run
0. Clone this repo
1. Run `npm install` in `/frontend` and `/backend`
2. Run `npm start` in `/frontend` and `/backend`

## TODO
### frontend
[ ] fix the letter guessing
[ ] update guess button to send a post request to backend
[ ] write function to check length of input
[ ] update front end to display correct/incorrect guesses
[ ] make responsive
### backend
[ ] check body only has 5 letters, return error if has less or more than 5
[ ] check guess function that will check guess against correct answer