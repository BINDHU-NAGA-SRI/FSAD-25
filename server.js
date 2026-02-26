const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes (mock for frontend)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Mock authentication
    const user = {
        id: Math.random().toString(36).substr(2, 9),
        email: email,
        name: email.split('@')[0],
        role: email.includes('teacher') ? 'teacher' : 'student'
    };
    res.json({ success: true, user });
});

app.post('/api/register', (req, res) => {
    const { name, email, role, password } = req.body;
    // Mock registration
    const user = {
        id: Math.random().toString(36).substr(2, 9),
        email: email,
        name: name,
        role: role
    };
    res.json({ success: true, user });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 KLsubmit server running on http://localhost:${PORT}`);
    console.log(`📱 Opening Chrome automatically...`);
    
    // Open Chrome automatically
    const { exec } = require('child_process');
    exec(`start chrome http://localhost:${PORT}`, (error) => {
        if (error) {
            console.log('Chrome opened manually at: http://localhost:${PORT}');
        }
    });
});
