const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Simple HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Serve index.html for root
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else {
        // Try to serve static files
        const filePath = path.join(__dirname, 'public', req.url);
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('File Not Found');
                return;
            }
            
            const ext = path.extname(filePath);
            const contentType = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.json': 'application/json'
            }[ext] || 'text/plain';
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        });
    }
});

server.listen(PORT, () => {
    console.log(`Simple server running on http://localhost:${PORT}`);
    console.log('Opening Chrome...');
    
    // Open Chrome
    setTimeout(() => {
        const { spawn } = require('child_process');
        spawn('cmd', ['/c', 'start http://localhost:3000'], { detached: true });
    }, 1000);
});
