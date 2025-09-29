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
    
    // Get the path to the parent directory (where the Flask app is)
    const parentDir = path.join(__dirname, '..', '..');
    const pythonPath = process.platform === 'win32' ? 'python' : 'python3';
    
    // Activate virtual environment and run Flask app
    const activateScript = process.platform === 'win32' 
        ? path.join(parentDir, 'npm', 'Scripts', 'activate.bat')
        : path.join(parentDir, 'npm', 'bin', 'activate');
    
    const appPath = path.join(parentDir, 'app.py');
    
    console.log(`🐍 Using Python: ${pythonPath}`);
    console.log(`📁 App path: ${appPath}`);
    console.log(`🔧 Virtual env: ${path.join(parentDir, 'npm')}`);
    console.log('');
    
    // Set environment variables
    const env = {
        ...process.env,
        VIRTUAL_ENV: path.join(parentDir, 'npm'),
        PATH: process.platform === 'win32' 
            ? `${path.join(parentDir, 'npm', 'Scripts')};${process.env.PATH}`
            : `${path.join(parentDir, 'npm', 'bin')}:${process.env.PATH}`
    };
    
    const flaskProcess = spawn(pythonPath, [appPath], {
        cwd: parentDir,
        env: env,
        stdio: 'inherit'
    });
    
    flaskProcess.on('error', (err) => {
        console.error('❌ Failed to start Flask server:', err.message);
        console.log('');
        console.log('💡 Troubleshooting:');
        console.log('   1. Make sure Python is installed');
        console.log('   2. Run: npm run install-deps');
        console.log('   3. Check if virtual environment exists');
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
