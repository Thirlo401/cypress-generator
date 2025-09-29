#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

/**
 * Cypress Generator CLI
 * Launches the Flask backend server for the Cypress test generator
 */

function startFlaskServer() {
    console.log('🚀 Starting Cypress Generator Flask Server...');
    console.log('📝 AI-powered Cypress test generation');
    console.log('🌐 Server will be available at: http://localhost:5000');
    console.log('📖 API Documentation: http://localhost:5000/api/test_types');
    console.log('');
    
    // Get the path to the NPM package directory (where the Flask app is)
    const packageDir = path.join(__dirname, '..');
    const pythonPath = process.platform === 'win32' ? 'python' : 'python3';
    
    // Check if app.py exists in the package directory
    const appPath = path.join(packageDir, 'app.py');
    const fs = require('fs');
    
    if (!fs.existsSync(appPath)) {
        console.error('❌ app.py not found at', appPath);
        console.error('   Ensure app.py is in the project root alongside package.json.');
        process.exit(1);
    }
    
    console.log('🔍 Project root:', packageDir);
    console.log('🔍 App path:', appPath);
    
    console.log(`🐍 Using Python: ${pythonPath}`);
    console.log(`📁 App path: ${appPath}`);
    console.log('');
    
    // Set environment variables
    const env = {
        ...process.env,
        FLASK_APP: appPath,
        FLASK_ENV: 'development',
        PORT: '5000'
    };
    
    const flaskProcess = spawn(pythonPath, [appPath], {
        cwd: packageDir,
        env: env,
        stdio: 'inherit'
    });
    
    flaskProcess.on('error', (err) => {
        console.error('❌ Failed to start Flask server:', err.message);
        console.log('');
        console.log('💡 Troubleshooting:');
        console.log('   1. Make sure Python 3.8+ is installed');
        console.log('   2. Install dependencies: pip install flask playwright openai');
        console.log('   3. Install Playwright browsers: playwright install');
        console.log('   4. Set OPENAI_API_KEY environment variable');
        process.exit(1);
    });
    
    flaskProcess.on('close', (code) => {
        console.log(`\n🛑 Flask server stopped with code ${code}`);
    });
    
    // Handle Ctrl+C gracefully
    process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down Flask server...');
        flaskProcess.kill('SIGINT');
        process.exit(0);
    });
}

// Check if we're being run directly
if (require.main === module) {
    startFlaskServer();
}

module.exports = { startFlaskServer };
