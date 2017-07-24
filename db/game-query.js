const knex = require('./knex.js');

module.exports = {
  getGames: () => {
    return knex('game');
  },
  getOneGame: (id) => {
    return knex('game').where('id', id).first();
  }
}
