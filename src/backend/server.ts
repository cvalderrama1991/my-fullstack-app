import http from 'node:http';

const PORT: number = Number(process.env.PORT) || 3000
const HOST: string = process.env.HOST || 'localhost';

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen((PORT), HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
