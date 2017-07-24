const environment = process.env.NODE_ENV || 'development'
const knex = require('knex');
const dbconfig = require('./knexfile')[environment];

exports = knex(dbconfig);
