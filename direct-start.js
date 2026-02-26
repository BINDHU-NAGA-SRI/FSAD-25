const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 3000;

// Create simple server
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
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

// Start server and immediately open Chrome
server.listen(PORT, () => {
    console.log(`🚀 KLsubmit running on http://localhost:${PORT}`);
    
    // Open Chrome immediately - no delays
    const openChrome = () => {
        const commands = [
            'start chrome http://localhost:3000',
            'start http://localhost:3000',
            'chrome http://localhost:3000'
        ];
        
        for (const cmd of commands) {
            try {
                spawn('cmd', ['/c', cmd], { detached: true, stdio: 'ignore' });
                break;
            } catch (e) {
                continue;
            }
        }
    };
    
    // Open Chrome immediately
    openChrome();
    
    console.log('📱 Chrome should open automatically...');
    console.log('If not, go to: http://localhost:3000');
});
