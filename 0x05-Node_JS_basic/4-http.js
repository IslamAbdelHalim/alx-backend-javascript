const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello Holberton School!');
};

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
