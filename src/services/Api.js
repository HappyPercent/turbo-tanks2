const STORAGE_KEY = 'turbo-tanks:players';

// Leaderboard stored in the browser's localStorage.
// Shape: { players: [{ id, login, avatar, score }] }
export default class Api {
  read() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  write(players) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
  }

  async get() {
    return { players: this.read() };
  }

  async post(login, avatar, score) {
    const players = this.read();
    const id = players.reduce((max, p) => Math.max(max, p.id), 0) + 1;
    this.write([...players, { id, login, avatar, score }]);
  }

  async put(id, login, avatar, score) {
    this.write(this.read().map(p => (p.id === id ? { id, login, avatar, score } : p)));
  }
}
