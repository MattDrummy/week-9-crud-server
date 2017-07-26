module.exports = {
  validGame: (req, res, next) => {
    let validName = typeof req.query.name === 'string' && game.name.trim() !== '';
    let validYear = !isNaN(req.query.year);
    let validDeveloper = typeof req.query.developer === 'string' && game.developer.trim() !== '';
    let validDirectors = typeof req.query.directors === 'string' && game.directors.trim() !== '';
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
      result = typeof req.query.name === 'string' && game.name.trim() !== '';
    }
    if (req.body.year) {
      result = !isNaN(req.query.year);
    }
    if (req.body.developer) {
      result = typeof req.query.developer === 'string' && game.developer.trim() !== '';
    }
    if (req.body.directors) {
      result = typeof req.query.directors === 'string' && game.directors.trim() !== '';
    }
  }
}
