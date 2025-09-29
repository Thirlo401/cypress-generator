# Cypress Generator NPM Package

🚀 **AI-Powered Cypress Test Generator** - Generate comprehensive Cypress test scripts for any website instantly with AI assistance.

## Features

- 🤖 **AI-Enhanced Test Generation** - Uses OpenAI to suggest optimal selectors and test strategies
- 🌐 **Web Crawling** - Automatically crawls websites using Playwright
- 📝 **Multiple Test Types** - Generates smoke tests, E2E tests, authentication tests, and validation tests
- 🎯 **Smart Selectors** - Prioritizes data-testid, data-cy, and other stable selectors
- 📊 **Page Object Model** - Generates maintainable page object classes
- 🔧 **Livewire Support** - Special support for Laravel Livewire applications
- 📁 **Fixture Generation** - Creates test data fixtures automatically

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn

### Quick Start

1. **Clone and install:**
   ```bash
   git clone <your-repo>
   cd cypress-generator-npm
   npm install
   ```

2. **Install Python dependencies:**
   ```bash
   npm run install-deps
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your OpenAI API key
   ```

4. **Start the services:**
   ```bash
   # Terminal 1: Start Flask backend
   npm run dev
   
   # Terminal 2: Start Node.js frontend
   npm start
   ```

## Usage

### CLI Usage

```bash
# Start the Flask server
npx cypress-generator

# Or use the npm script
npm run dev
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
npm start          # Start Node.js server
npm run dev        # Start Flask backend
npm run install-deps # Install Python dependencies
npm test           # Run tests (when implemented)
```

### Adding New Features

1. **New Test Types**: Add to `generate_cypress_script()` function
2. **AI Enhancements**: Modify `get_ai_suggestions()` function
3. **Selector Strategies**: Update `get_best_selector()` function

## Troubleshooting

### Common Issues

1. **Flask server won't start:**
   ```bash
   # Check Python virtual environment
   source ../npm/bin/activate
   pip list
   
   # Reinstall dependencies
   npm run install-deps
   ```

2. **Playwright browser issues:**
   ```bash
   # Install browsers
   source ../npm/bin/activate
   playwright install
   ```

3. **OpenAI API errors:**
   - Check your API key in `.env`
   - Verify API key has sufficient credits
   - Check rate limits

### Debug Mode

Enable debug logging:

```bash
export FLASK_DEBUG=True
npm run dev
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
