const express = require('express');
const router = express.Router();
const queries = require('../db/game-query.js')
const validation = require('./validation.js')


router.get('/', (req, res) => {
  queries.getGames().then((games) => {
    let result = games;
    let keys = Object.keys(req.query)
    keys.forEach((key) => {
      result = result.filter((element) => {
        let sum = '';
        for (var variable in element) {
          sum += `${element[variable]}`;
        }
        return (sum).toLowerCase().includes(req.query[key].toLowerCase());
      })
    })
    res.json(result);
  })
})

router.get('/:id', validation.validId, (req, res) => {
  queries.getOneGame(req.params.id).then((game) => {
    res.json(game);
  })
})

router.post('/', validation.validGame, (req, res) => {
  queries.postGame(req.body).then((game) => {
    res.json(game);
  });
})

router.put('/:id', validation.validId, validation.validUpdate, (req, res) => {
  queries.updateGame(req.body, req.params.id).then((game) => {
    res.json(game);
  })
})

router.delete('/:id', validation.validId, (req, res) => {
  queries.getOneGame(req.params.id).then((game) => {
    queries.deleteGame(req.params.id).then((data) => {
      let result = {};
      Object.assign(result, game);
      result[0].deleted = true;
      res.json(result);
    })
  })
})
module.exports = router;
