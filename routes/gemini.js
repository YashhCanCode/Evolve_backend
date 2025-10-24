const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

const prompt = `
Generate one unique real-world unsolved problem in a structured format.

Target Audience: Computer Science and Engineering students, including domains like Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Internet of Things, Blockchain, Software Engineering, and related fields. Occasionally (e.g., once in every 10 generations), include problems from interdisciplinary areas like Healthcare, Biotechnology, accesibility, environment, but keep the primary focus on technology-driven challenges relevant for student innovators and hackathon participants.

Respond in the following format exactly:

Title: [Title of the problem]  
Domain: [Relevant domain like Computer-Science, Data Science, etc.]  
Description: [Brief summary of the problem]  
Background: [Context and significance]  
Existing Solutions: [List a few solutions that already exist, if any]  
Limitations: [Limitations of existing solutions]  
Category: [Choose from: Technology, Education, Environment, Finance, Cybersecurity, Machine Learning, AI, General, etc.]
`;

router.post("/auto-generate", async (req, res) => {
  try {
    const result = await model.generateContent(prompt);
    const text = result?.response?.text ? (await result.response.text()).trim() : null;

    if (!text || text.length < 10) {
      console.log("⚠️ Empty or invalid Gemini response:\n", text);
      return res.status(500).json({ error: "Gemini returned empty content" });
    }

    console.log("🧾 Gemini Raw Response:\n", text);

    const parsed = {
      title: "",
      domain: "",
      description: "",
      background: "",
      existingSolutions: [],
      limitations: [],
      category: "General",
      source: "User",
    };

    const lines = text.split("\n");
    let currentField = "";
    let tempContent = "";

    for (let line of lines) {
      const match = line.match(/^(Title|Domain|Description|Background|Existing Solutions|Limitations|Category)[:\-]\s*(.*)/i);
      if (match) {
        if (currentField) {
          saveParsedContent(parsed, currentField, tempContent);
        }
        currentField = match[1];
        tempContent = match[2];
      } else {
        tempContent += "\n" + line;
      }
    }
    if (currentField) saveParsedContent(parsed, currentField, tempContent);

    const newProblem = new Problem({
      title: parsed.title,
      domain: parsed.domain,
      description: parsed.description,
      background: parsed.background,
      existingSolutions: parsed.existingSolutions,
      limitations: parsed.limitations,
      category: parsed.category,
      source: parsed.source,
    });

    await newProblem.save();
    return res.status(201).json({ message: "✅ Problem generated and saved", data: newProblem });

  } catch (error) {
    console.error("❌ Error generating problem:", error.message);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

function saveParsedContent(parsed, field, content) {
  const key = field.toLowerCase().replace(/\s+/g, "");
  if (["existingsolutions", "limitations"].includes(key)) {
    parsed[key] = content
      .split(/[\n•;\-]+/)
      .map((s) => s.trim())
      .filter(Boolean);
  } else {
    parsed[key] = content.trim();
  }
}

module.exports = router;