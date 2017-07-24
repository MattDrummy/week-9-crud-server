const environment = process.env.NODE_ENV || 'development'
const knex = require('knex');
const dbconfig = require('./knexfile')[environment];

module.exports = knex(dbconfig);
