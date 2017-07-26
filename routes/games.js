const express = require('express');
const router = express.Router();
const queries = require('../db/game-query.js')

router.get('/', (req, res) => {
  queries.getGames().then((games) => {
    let result = games;
    if (req.query !== {}) {
      let keys = Object.keys(req.query)
      keys.forEach((key) => {
        result = result.filter((element) => {
          if (key === 'year') {
            return element[key] == req.query[key];
          } else {
            return (element[key]).toLowerCase().includes(req.query[key].toLowerCase());
          }
        })
      })
    }
    res.json(result);
  })
})

router.get('/:id', (req, res) => {
  queries.getOneGame(req.params.id).then((game) => {
    res.json(game);
  })
})

router.post('/', (req, res) => {
  queries.postGame(req.body).then((game) => {
    res.json(game);
  });
})

router.put('/:id', (req, res) => {
  queries.updateGame(req.params.id).then((game) => {
    res.json(game);
  })
})

router.delete('/:id', (req, res) => {

  res.send('Success');
})
module.exports = router;
