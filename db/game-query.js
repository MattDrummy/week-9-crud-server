const knex = require('./knex.js');

module.exports = {
  getGames: () => {
    return knex('game');
  },
  getOneGame: (id) => {
    return knex('game').where('id', id);
  },
  postGame: (game) => {
    return knex('game').insert(game).returning('*');
  },
  updateGame: (game) => {

  },
  deleteGame: (id) => {

  }
}
