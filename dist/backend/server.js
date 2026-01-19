import http from 'node:http';
import url from 'node:url';
import path from 'node:path';
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';
// Get the current file path
const __filename = url.fileURLToPath(import.meta.url);
// Get the current directory path
const __dirname = path.dirname(__filename);
// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('<p>Hello World!');
});
server.listen((PORT), HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
//# sourceMappingURL=server.js.map