const router = require('express').Router();
const db = require('../helpers/cohorts-model.js');

router.get('/', (req, res) => {
      db.find()
      .then(res => {
            res.status(200).json(res);
      })
      .catch(err => {
            res.status(500).json({ error: 'could not get anything from the database'})
      });
});

module.exports = router;