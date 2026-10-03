# Turbo Tanks

Browser tank game: drive your tank around a walled arena and shoot an enemy tank that hunts you using A* pathfinding. Each hit scores a point, and the top scores go on a leaderboard.

React 16 · Redux · custom game loop and collision logic in reducers

## Controls

| Key | Action |
|---|---|
| Arrow keys | Move |
| Space | Fire |

## Run locally

```bash
npm install
npm start
```

`npm run build` creates a production bundle.

## How it works

- `src/reducer/moveObjects.js`: movement, bullets, collisions, lives and score
- Enemy AI: A* pathfinding over the arena grid toward the player
- `src/services/Api.js`: leaderboard stored in `localStorage` (no accounts or passwords)
