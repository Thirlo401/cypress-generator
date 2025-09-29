#!/usr/bin/env python3
"""
Flask Server Runner with Enhanced Logging
This script runs the Cypress Generator Flask server with better output and logging.
"""

import os
import sys
import logging
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

def main():
    """Main function to run the Flask server."""
    try:
        print("🚀 Starting Cypress Generator Flask Server...")
        print("📝 AI-powered Cypress test generation")
        print("🌐 Server will be available at: http://localhost:5001")
        print("📖 API Documentation: http://localhost:5001/api/test_types")
        print()
        
        # Import and run the Flask app
        from app import app
        
        print("🔍 Project root:", os.getcwd())
        print("🔍 App path:", os.path.abspath('app.py'))
        print("🐍 Using Python:", sys.executable)
        print("📁 App path:", os.path.abspath('app.py'))
        print()
        
        # Run the Flask app
        app.run(
            debug=True, 
            host='0.0.0.0',  # Allow external connections
            port=5001,  # Use port 5001 to avoid conflict with AirPlay
            use_reloader=True
        )
        
    except KeyboardInterrupt:
        print("\n🛑 Flask server stopped by user")
        sys.exit(0)
    except Exception as e:
        print(f"🛑 Flask server stopped with error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
