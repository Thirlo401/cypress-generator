
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Proxy to Flask backend
const FLASK_URL = process.env.FLASK_URL || 'http://localhost:5000';

app.use('/api', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${FLASK_URL}${req.originalUrl}`,
            data: req.body,
            headers: {
                'Content-Type': 'application/json',
                ...req.headers
            }
        });
        
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Proxy error:', error.message);
        res.status(500).json({ 
            error: 'Backend service unavailable',
            message: 'Make sure the Flask server is running on port 5000'
        });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cypress Generator NPM Package</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #2c3e50; }
                .status { padding: 15px; margin: 20px 0; border-radius: 5px; }
                .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
                .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
                .info { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
                code { background: #f8f9fa; padding: 2px 6px; border-radius: 3px; }
                .endpoint { margin: 10px 0; padding: 10px; background: #f8f9fa; border-left: 4px solid #007bff; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Cypress Generator NPM Package</h1>
                
                <div class="status success">
                    <strong>✅ NPM Package Running!</strong><br>
                    This is the Node.js frontend for the Cypress Generator.
                </div>
                
                <h2>📡 API Endpoints</h2>
                <div class="endpoint">
                    <strong>POST /api/generate</strong> - Generate Cypress tests for a URL
                </div>
                <div class="endpoint">
                    <strong>GET /api/test_types</strong> - Get available test types
                </div>
                <div class="endpoint">
                    <strong>POST /api/ask-ai</strong> - Ask AI questions about Thirlo's CV
                </div>
                
                <h2>🔧 Usage</h2>
                <p>To use this package:</p>
                <ol>
                    <li>Make sure the Flask backend is running: <code>npm run dev</code></li>
                    <li>Send POST requests to <code>/api/generate</code> with a JSON body containing the URL</li>
                    <li>Example: <code>{"url": "https://example.com"}</code></li>
                </ol>
                
                <h2>🛠️ Development</h2>
                <p>Available commands:</p>
                <ul>
                    <li><code>npm start</code> - Start the Node.js server</li>
                    <li><code>npm run dev</code> - Start the Flask backend</li>
                    <li><code>npm run install-deps</code> - Install Python dependencies</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🌐 NPM Package server running on http://localhost:${PORT}`);
    console.log(`🔗 Flask backend should be running on ${FLASK_URL}`);
    console.log(`📖 Visit http://localhost:${PORT} for the interface`);
});
