# 🚀 Cypress Test Generator

**AI-Powered Cypress Test Generation for Any Website**

Generate comprehensive Cypress test scripts for any website instantly with AI assistance. This tool combines Flask backend with Playwright web crawling and OpenAI integration to create robust, maintainable test suites.

## ✨ Features

- 🤖 **AI-Enhanced Test Generation** - Uses OpenAI to suggest optimal selectors and test strategies
- 🌐 **Web Crawling** - Automatically crawls websites using Playwright
- 📝 **Multiple Test Types** - Generates smoke tests, E2E tests, authentication tests, and validation tests
- 🎯 **Smart Selectors** - Prioritizes data-testid, data-cy, and other stable selectors
- 📊 **Page Object Model** - Generates maintainable page object classes
- 🔧 **Livewire Support** - Special support for Laravel Livewire applications
- 📁 **Fixture Generation** - Creates test data fixtures automatically

## 🛠️ Installation

### Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

### Quick Start (Recommended)

**Option 1: Install globally via NPM (Easiest)**
```bash
# Step 1: Install the package globally
npm install -g cypress-generator

# Step 2: Install Python dependencies (run once)
pip install flask playwright openai python-dotenv
playwright install

# Step 3: Set your OpenAI API key
export OPENAI_API_KEY=your_api_key_here

# Step 4: Start the generator
cypress-generator
```

**Option 2: Install locally in your project**
```bash
# Install the package in your project
npm install cypress-generator

# Install Python dependencies
npm run install-deps

# Set your OpenAI API key
export OPENAI_API_KEY=your_api_key_here

# Start the generator
npx cypress-generator
```

## 🚀 Usage

### Web Interface

1. **Start the server:**
   ```bash
   cypress-generator
   # or
   npx cypress-generator
   ```

2. **Open your browser:**
   - Go to `http://localhost:5000`
   - Enter a website URL (e.g., `https://example.com`)
   - Click "Generate Cypress Tests"
   - View and download generated test files

### CLI Usage

```bash
# Install globally and run
npm install -g cypress-generator
cypress-generator

# Or use npx
npx cypress-generator
```

### API Usage

#### Generate Tests for a Website

```bash
curl -X POST http://localhost:5000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'
```

#### Get Available Test Types

```bash
curl http://localhost:5000/api/test_types
```

#### Ask AI Questions

```bash
curl -X POST http://localhost:5000/api/ask-ai \
  -H "Content-Type: application/json" \
  -d '{"question": "What testing frameworks does Thirlo use?"}'
```

### Generated Files

The generator creates:

- **Cypress Test Script** - Complete test suite with multiple test types
- **Page Object Class** - Maintainable page object for the website
- **Test Fixtures** - JSON data for test scenarios
- **AI Suggestions** - Enhanced selectors and test strategies

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# OpenAI API Key (required for AI features)
OPENAI_API_KEY=your_openai_api_key_here

# Flask Configuration
FLASK_ENV=development
FLASK_DEBUG=True

# Server Configuration
PORT=5000
HOST=0.0.0.0
```

### Test Configuration

The generated tests include:

- **Smoke Tests** - Basic page loading and visibility
- **E2E Tests** - Complete user workflows
- **Authentication Tests** - Login/logout flows
- **Validation Tests** - Form validation testing
- **Livewire Tests** - Laravel Livewire component testing

## Project Structure

```
cypress-generator-npm/
├── bin/
│   └── cypress-generator.js    # CLI executable
├── generated_scripts/           # Output directory for generated tests
├── index.js                    # Node.js server
├── package.json               # NPM package configuration
├── README.md                  # This file
└── .env.example               # Environment variables template
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main interface |
| `/api/generate` | POST | Generate Cypress tests for a URL |
| `/api/test_types` | GET | Get available test types |
| `/api/ask-ai` | POST | Ask AI questions about Thirlo's CV |

## Generated Test Features

### Smart Selector Priority

1. `data-testid` attributes
2. `data-cy` attributes (Cypress-specific)
3. `data-test` attributes
4. `data-automation-id` attributes
5. `id` attributes
6. `name` attributes
7. `aria-label` attributes
8. XPath fallback

### Test Types Generated

- **Smoke Tests**: Page loading, basic functionality
- **Interactive Tests**: Form submissions, button clicks
- **Authentication Tests**: Login/logout flows
- **Validation Tests**: Required field validation
- **Livewire Tests**: Component state updates

### AI-Enhanced Features

- **Selector Suggestions**: AI recommends the best selectors
- **Assertion Recommendations**: Suggests appropriate assertions
- **Edge Case Detection**: Identifies potential testing scenarios
- **Performance Considerations**: Optimizes test performance

## Development

### Available Scripts

```bash
npm start                    # Start Node.js server
npm run install-deps        # Install Python dependencies
npm run install-dependencies # Alternative script name
npm run setup               # Setup script (same as install-deps)
cypress-generator           # Start the Flask server directly
```

### Adding New Features

1. **New Test Types**: Add to `generate_cypress_script()` function
2. **AI Enhancements**: Modify `get_ai_suggestions()` function
3. **Selector Strategies**: Update `get_best_selector()` function

## 🐛 Troubleshooting

### Common Issues

1. **"ModuleNotFoundError: No module named 'dotenv'"**
   ```bash
   # Install missing Python dependencies
   pip install flask playwright openai python-dotenv
   playwright install
   ```

2. **"zsh: command not found: pip"**
   ```bash
   # Try pip3 instead
   pip3 install flask playwright openai python-dotenv
   # or install pip first
   python3 -m ensurepip --upgrade
   ```

3. **"Missing script: install-deps"**
   ```bash
   # Use the correct script name
   npm run install-dependencies
   # or
   npm run setup
   ```

4. **Flask server won't start:**
   ```bash
   # Check Python installation
   python3 --version
   
   # Install dependencies manually
   pip install flask playwright openai python-dotenv
   playwright install
   ```

4. **Playwright browser issues:**
   ```bash
   # Install browsers
   playwright install
   ```

5. **OpenAI API errors:**
   - Set your API key: `export OPENAI_API_KEY=your_key_here`
   - Verify API key has sufficient credits
   - Check rate limits

### Quick Fix Commands

```bash
# Complete setup from scratch
npm install -g cypress-generator
pip install flask playwright openai python-dotenv
playwright install
export OPENAI_API_KEY=your_key_here
cypress-generator
```

### If You Get "zsh: command not found: pip"

```bash
# Try these alternatives:
pip3 install flask playwright openai python-dotenv
# or
python3 -m pip install flask playwright openai python-dotenv
# or
python3 -m ensurepip --upgrade
pip install flask playwright openai python-dotenv
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Author

**Thirlo** - QA Engineer specializing in test automation
- Experience with Cypress, Selenium, and Laravel/Livewire
- Certified Software Tester (CSTE)
- 30% defect reduction through automated testing

## Support

For issues and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the API documentation

---

**Happy Testing! 🧪✨**
