const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const isWindows = process.platform === "win32";
const projectRoot = __dirname; // Assumes run from scripts/, but adjust if needed; during postinstall, cwd is root
const venvPath = path.join(projectRoot, "..", "venv"); // Up one level to root
const binDir = isWindows ? "Scripts" : "bin";
const exe = isWindows ? ".exe" : "";
const pythonCmd = isWindows ? "python" : "python3";

console.log("📦 Setting up Python environment...");

// Ensure venv exists
if (!fs.existsSync(venvPath)) {
  spawnSync(pythonCmd, ["-m", "venv", "venv"], { cwd: projectRoot, stdio: "inherit" });
}

// Install Python dependencies inside venv
const requirements = path.join(projectRoot, "..", "requirements.txt");
if (fs.existsSync(requirements)) {
  const pipPath = path.join(venvPath, binDir, `pip${exe}`);
  spawnSync(pipPath, ["install", "-r", "requirements.txt"], {
    cwd: projectRoot,
    stdio: "inherit"
  });
}

// Install Playwright browsers
const playwrightPath = path.join(venvPath, binDir, `playwright${exe}`);
spawnSync(playwrightPath, ["install"], { cwd: projectRoot, stdio: "inherit" });

console.log("✅ Python environment ready!");