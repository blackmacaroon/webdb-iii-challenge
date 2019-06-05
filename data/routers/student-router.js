const router = require('express').Router();
const db = require('../helpers/students-model');

router.get('/', (req, res) => {
      db.find()
      .then(students => {
            res.status(200).json(students);
      })
      .catch(err => {
            res.status(500).json({ error: 'could not get anything from the database'})
      });
});

module.exports = router;