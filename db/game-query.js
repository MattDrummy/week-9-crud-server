const knex = require('./knex.js');

module.exports = {
  getGames: () => {
    return knex('game');
  },
  getOneGame: (name) => {
    return knex('game').where('name', name);
  }
}
