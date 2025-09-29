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

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cypress-generator.git
   cd cypress-generator
   ```

2. **Install Python dependencies:**
   ```bash
   python3 -m venv npm
   source npm/bin/activate
   pip install -e .
   ```

3. **Install Node.js dependencies:**
   ```bash
   cd cypress-generator-npm
   npm install
   ```

4. **Set up environment variables:**
   ```bash
   cp cypress-generator-npm/.env.example .env
   # Edit .env with your OpenAI API key
   ```

5. **Start the services:**
   ```bash
   # Terminal 1: Start Flask backend
   source npm/bin/activate
   python3 app.py
   
   # Terminal 2: Start Node.js frontend (optional)
   cd cypress-generator-npm
   npm start
   ```

## 🚀 Usage

### Web Interface

1. Open your browser and go to: `http://localhost:5001`
2. Enter a website URL (e.g., `https://example.com`)
3. Click "Generate Cypress Tests"
4. Download the generated test files

### CLI Usage

```bash
# Install globally
npm install -g cypress-generator

# Use the CLI
cypress-generator
```

### API Usage

#### Generate Tests for a Website

```bash
curl -X POST http://localhost:5001/api/generate \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'
```

#### Get Available Test Types

```bash
curl http://localhost:5001/api/test_types
```

## 📦 NPM Package

This project is also available as an npm package:

```bash
npm install -g cypress-generator
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# OpenAI API Key (required for AI features)
OPENAI_API_KEY=your_openai_api_key_here

# Flask Configuration
FLASK_ENV=development
FLASK_DEBUG=True

# Server Configuration
PORT=5001
HOST=0.0.0.0
```

## 📁 Project Structure

```
cypress-generator/
├── app.py                          # Flask backend
├── cli.py                          # CLI interface
├── setup.py                        # Python package configuration
├── template/
│   └── index.html                  # Web interface
├── cypress-generator-npm/          # NPM package
│   ├── bin/
│   │   └── cypress-generator.js    # CLI executable
│   ├── index.js                    # Node.js server
│   ├── package.json               # NPM configuration
│   └── README.md                   # NPM package docs
├── generated_scripts/              # Output directory
└── README.md                       # This file
```

## 🧪 Generated Test Features

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

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Web interface |
| `/api/generate` | POST | Generate Cypress tests for a URL |
| `/api/test_types` | GET | Get available test types |
| `/api/ask-ai` | POST | Ask AI questions about Thirlo's CV |

## 🛠️ Development

### Available Scripts

```bash
# Python backend
python3 app.py                    # Start Flask server
source npm/bin/activate           # Activate virtual environment
pip install -e .                  # Install in development mode

# Node.js frontend
cd cypress-generator-npm
npm start                          # Start Node.js server
npm run dev                       # Start Flask backend
npm run install-deps             # Install Python dependencies
```

### Adding New Features

1. **New Test Types**: Add to `generate_cypress_script()` function
2. **AI Enhancements**: Modify `get_ai_suggestions()` function
3. **Selector Strategies**: Update `get_best_selector()` function

## 🐛 Troubleshooting

### Common Issues

1. **Flask server won't start:**
   ```bash
   # Check Python virtual environment
   source npm/bin/activate
   pip list
   
   # Reinstall dependencies
   pip install -e .
   ```

2. **Playwright browser issues:**
   ```bash
   # Install browsers
   source npm/bin/activate
   playwright install
   ```

3. **OpenAI API errors:**
   - Check your API key in `.env`
   - Verify API key has sufficient credits
   - Check rate limits

4. **Port conflicts:**
   - Port 5000 is used by Apple AirPlay
   - Use port 5001: `python3 app.py --port 5001`

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 👨‍💻 Author

**Thirlo Fredericks** - QA Engineer
- Experience with Cypress, Selenium, and Laravel/Livewire
- Certified Software Tester (CSTE)
- 30% defect reduction through automated testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the API documentation

## 🎯 Roadmap

- [ ] Chrome Extension version
- [ ] VS Code extension
- [ ] Docker support
- [ ] CI/CD integration
- [ ] More test frameworks support (Jest, Playwright, etc.)

---

**Happy Testing! 🧪✨**

Made with ❤️ by [Thirlo](https://github.com/yourusername)
