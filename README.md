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
3. Create `.env` file in `/frontend/.env` fill with:
```env
BACKEND="http://127.0.0.1:3000"
```

## Play Here:
https://wordle-frontend.onrender.com

## TODO
### frontend
[ ] Make responsive
[ ] Finish styling
[ ] Center 'wordle'
[ ] Make keyboard dynamic
### backend
[ ] Make backend word persistent
