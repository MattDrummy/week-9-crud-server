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
  updateGame: (game, id) => {
    let obj = {
      name: game.name,
      year: game.year,
      developer: game.developer,
      directors: game.directors
    }
    return knex('game').where('id', id).update(obj).returning('*')
  },
  deleteGame: (id) => {
    return knex('game').where('id', id).del()
  }
}
