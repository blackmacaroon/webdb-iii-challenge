const express = require('express');
const helmet = require('helmet');

const cohortRouter = require('../data/routers/cohort-router.js');
const studentRouter = require('../data/routers/student-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
      res.send(`<h2>hello world</h2>`).json({ message: 'nailed it.' })
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: "i cant. even."})
      })
});

server.use('/api/cohorts', cohortRouter);
server.use('/api/students', studentRouter);

module.exports = server;