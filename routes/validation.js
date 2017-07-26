module.exports = {
  validGame: (req, res, next) => {
    let validName = typeof req.body.name === 'string' && req.body.name.trim() !== '';
    let validYear = !isNaN(req.body.year);
    let validDeveloper = typeof req.body.developer === 'string' && req.body.developer.trim() !== '';
    let validDirectors = typeof req.body.directors === 'string' && req.body.directors.trim() !== '';
    if (validName && validYear && validDeveloper && validDirectors){
      return next();
    } else {
      res.json({message: 'Invalid Game'})
    }
  },
  validId: (req, res, next) => {
    let id = req.params.id;
    if (!isNaN(id)) {
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
