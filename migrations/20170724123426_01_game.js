
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.integer('year').notNullable();
    table.text('developer').notNullable();
    table.text('directors').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
