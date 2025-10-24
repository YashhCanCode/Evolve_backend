const cron = require("node-cron");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

console.log("📆 Scheduler loaded.");

// Log file path
const logFile = path.join(__dirname, "problem-generation.log");

// Helper to write logs to file
function logToFile(message) {
  const time = new Date().toISOString();
  fs.appendFileSync(logFile, `[${time}] ${message}\n`, "utf8");
}

// Run every Monday at 10:00 AM
cron.schedule("0 10 * * 1", async () => {
  console.log("⚙️ Weekly auto-generation started...");
  logToFile("⚙️ Weekly auto-generation started...");

  for (let i = 1; i <= 3; i++) {
    try {
      console.log(`🆕 Generating problem ${i} of 3...`);
      logToFile(`🆕 Generating problem ${i} of 3...`);

      const response = await axios.post("http://localhost:5050/api/gemini/auto-generate");

      console.log(`✅ Problem ${i} generated: ${response.data.title}`);
      logToFile(`✅ Problem ${i} generated: ${response.data.title}`);
    } catch (error) {
      console.error(`❌ Scheduler error (Problem ${i}): ${error.message}`);
      logToFile(`❌ Scheduler error (Problem ${i}): ${error.message}`);
    }
  }
});