const server = require('./api/server.js');

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`\n*** Listening on localhost:${port} *** Hold on to your butts... ***\n`));