const express = require('express');
const router = express.Router();
const queries = require('../db/game-query.js')

router.get('/', (req, res, next) => {
  queries.getGames().then(games => {
    res.json(games);
  })
})

router.get('/:id', (req, res, next) => {
  queries.getOneGame(req.params.id).then(game => {
    res.json(game);
  })
})

module.exports = router;
