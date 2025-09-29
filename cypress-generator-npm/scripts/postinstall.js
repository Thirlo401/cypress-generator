const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const isWindows = process.platform === "win32";
const projectRoot = path.join(__dirname, ".."); // NPM package directory
const pythonCmd = isWindows ? "python" : "python3";

console.log("📦 Setting up Cypress Generator...");
console.log("🔍 Project root:", projectRoot);

// Check if Python is available
const pythonCheck = spawnSync(pythonCmd, ["--version"], { stdio: "pipe" });
if (pythonCheck.error) {
  console.log("⚠️  Python not found. Please install Python 3.8+ to use this package.");
  console.log("   You can install dependencies manually:");
  console.log("   pip install flask playwright openai python-dotenv");
  console.log("   playwright install");
  process.exit(0);
}

// Check if pip is available
const pipCheck = spawnSync(pythonCmd, ["-m", "pip", "--version"], { stdio: "pipe" });
if (pipCheck.error) {
  console.log("⚠️  pip not found. Trying to install pip...");
  const pipInstall = spawnSync(pythonCmd, ["-m", "ensurepip", "--upgrade"], { stdio: "inherit" });
  if (pipInstall.error) {
    console.log("❌ Failed to install pip. Please install Python with pip manually.");
    console.log("   Then run: pip install flask playwright openai python-dotenv");
    process.exit(1);
  }
}

console.log("✅ Python found:", pythonCheck.stdout.toString().trim());

// Install Python dependencies
const requirements = path.join(projectRoot, "requirements.txt");
if (fs.existsSync(requirements)) {
  console.log("📦 Installing Python dependencies...");
  const installResult = spawnSync(pythonCmd, ["-m", "pip", "install", "-r", "requirements.txt"], {
    cwd: projectRoot,
    stdio: "inherit"
  });
  
  if (installResult.error || installResult.status !== 0) {
    console.log("⚠️  Failed to install Python dependencies automatically.");
    console.log("   Please install manually:");
    console.log("   pip install flask playwright openai python-dotenv");
    console.log("   playwright install");
    console.log("   If 'pip' command not found, try 'pip3' or 'python3 -m pip'");
  } else {
    console.log("✅ Python dependencies installed successfully!");
  }
} else {
  console.log("⚠️  requirements.txt not found. Installing core dependencies...");
  const coreDeps = ["flask", "playwright", "openai", "python-dotenv"];
  coreDeps.forEach(dep => {
    console.log(`📦 Installing ${dep}...`);
    const result = spawnSync(pythonCmd, ["-m", "pip", "install", dep], {
      cwd: projectRoot,
      stdio: "inherit"
    });
    if (result.error || result.status !== 0) {
      console.log(`⚠️  Failed to install ${dep}`);
    }
  });
}

// Install Playwright browsers
console.log("🌐 Installing Playwright browsers...");
const playwrightResult = spawnSync(pythonCmd, ["-m", "playwright", "install"], {
  cwd: projectRoot,
  stdio: "inherit"
});

if (playwrightResult.error) {
  console.log("⚠️  Failed to install Playwright browsers automatically.");
  console.log("   Please install manually: playwright install");
}

console.log("✅ Cypress Generator setup complete!");
console.log("🚀 Run 'cypress-generator' to start the server");
console.log("📖 Make sure to set your OPENAI_API_KEY environment variable");