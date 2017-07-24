
exports.seed = function(knex, Promise) {
  return knex.raw('delete from "game"; alter sequence game_id_seq restart with 6;')
    .then(() => {
      let games = [
        {
          id: 1,
          name: 'The Elder Scrolls V: Skyrim',
          year: 2011,
          developer: 'Bethesda Game Studios',
          directors: 'Todd Howard'
        },
        {
          id: 2,
          name: 'DOOM',
          year: 2016,
          developer: 'iD Software',
          directors: 'Marty Stratton, Hugo Martin'
        },
        {
          id: 3,
          name: 'Xenogears',
          year: 1998,
          developer: 'Squaresoft',
          directors: 'Tetsuya Takahashi'

        },
        {
          id: 4,
          name: 'Final Fantasy Tactics',
          year: 1997,
          developer: 'Squaresoft',
          directors: 'Yasumi Matsuno'
        },
        {
          id: 5,
          name: 'Pillars of Eternity',
          year: 2015,
          developer: 'Obsidian Entertainment',
          directors: 'Josh Sawyer'
        }
      ];

      return knex('game').insert(games)
    });
};
