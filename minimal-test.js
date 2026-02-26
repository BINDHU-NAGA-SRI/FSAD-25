const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

console.log('Starting minimal test server...');

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.method} ${req.url}`);
    
    if (req.url === '/') {
        // Simple HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>KLsubmit Test</title>
                <style>
                    body { 
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; 
                        font-family: Arial; 
                        text-align: center; 
                        padding: 50px;
                    }
                    h1 { font-size: 3em; margin-bottom: 20px; }
                    .status { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px; }
                </style>
            </head>
            <body>
                <h1>🚀 KLsubmit is Working!</h1>
                <div class="status">
                    <h2>✅ Server Status: ONLINE</h2>
                    <p>Port: ${PORT}</p>
                    <p>Time: ${new Date().toLocaleString()}</p>
                </div>
                <div class="status">
                    <h2>📱 Browser Test: PASSED</h2>
                    <p>If you see this page, Chrome is working!</p>
                </div>
                <div class="status">
                    <h2>🎯 Next Steps:</h2>
                    <p>1. Close this test page</p>
                    <p>2. Run the full KLsubmit application</p>
                </div>
            </body>
            </html>
        `);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`✅ Test server running on http://localhost:${PORT}`);
    console.log(`📱 Opening Chrome...`);
    
    // Try multiple methods to open Chrome
    const openBrowser = () => {
        const { exec, spawn } = require('child_process');
        
        // Method 1: Windows start command
        exec('start http://localhost:3000', (error) => {
            if (!error) {
                console.log('✅ Chrome opened with start command');
                return;
            }
            
            // Method 2: Direct spawn
            try {
                spawn('cmd', ['/c', 'start chrome http://localhost:3000'], { detached: true });
                console.log('✅ Chrome opened with spawn');
            } catch (e) {
                console.log('❌ Could not open Chrome automatically');
                console.log('🔧 Please open Chrome manually and go to: http://localhost:3000');
            }
        });
    };
    
    // Open immediately
    setTimeout(openBrowser, 500);
});
