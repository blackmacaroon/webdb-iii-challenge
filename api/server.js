const express = require('express');
const helmet = require('helmet');

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

module.exports = server;