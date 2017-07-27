const validateKnex = require('../db/knex.js');

module.exports = {
  validPost: (req, res, next) => {
    let validName = typeof req.body.name === 'string' && req.body.name.trim() !== '';
    let validYear = !isNaN(req.body.year);
    let validDeveloper = typeof req.body.developer === 'string' && req.body.developer.trim() !== '';
    let validDirectors = typeof req.body.directors === 'string' && req.body.directors.trim() !== '';
    validateKnex('game').then((data)=>{
      let validNewPost = true;
      data.forEach((e)=>{
        if (req.body.name.toLowerCase() === e.name.toLowerCase()) {
          validNewPost = false;
        }
      })
      if (!validNewPost) {
        res.json({message: 'Duplicate Game'})
        return;
      }
      if (validName && validYear && validDeveloper && validDirectors){
        console.log("next");
        return next();
      } else {
        res.json({message: 'Invalid Input'})
        return;
      }
    })

  },
  validId: (req, res, next) => {
    let id = req.params.id;
    if (!isNaN(id) && id >= 0) {
      return next();
    } else {
      res.json({message: 'Invalid ID parameter'})
    }
  },
  validUpdate: (req, res, next) => {
    var result = true;
    if (req.body.name) {
      result = typeof req.body.name === 'string' && req.body.name.trim() !== '';
    }
    if (req.body.year) {
      result = !isNaN(req.body.year);
    }
    if (req.body.developer) {
      result = typeof req.body.developer === 'string' && req.body.developer.trim() !== '';
    }
    if (req.body.directors) {
      result = typeof req.body.directors === 'string' && req.body.directors.trim() !== '';
    }
    if (result){
      return next()
    } else {
      res.json({message: 'Invalid Update parameters'})

    }
  }
}
