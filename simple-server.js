const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Opening Chrome...');
    
    // Open Chrome after a short delay
    setTimeout(() => {
        const { spawn } = require('child_process');
        spawn('chrome', ['http://localhost:3000'], { detached: true });
    }, 1000);
});
