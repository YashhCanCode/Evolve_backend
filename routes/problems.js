const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");

// GET all problems
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch problems" });
  }
});

// GET problems by category (case-insensitive)
router.get("/category/:category", async (req, res) => {
  try {
    const categoryRegex = new RegExp(req.params.category, "i"); // case-insensitive
    const problems = await Problem.find({ category: categoryRegex });
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch problems by category" });
  }
});

// GET single problem by _id
router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id); // uses _id
    if (problem) {
      res.json(problem);
    } else {
      res.status(404).json({ error: "Problem not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch problem" });
  }
});

module.exports = router;