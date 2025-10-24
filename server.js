console.log("🔧 Server starting...");
require("dotenv").config(); // ✅ Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const problemsRoutes = require("./routes/problems");
const feedbackRoutes = require("./routes/feedback");
const geminiRoutes = require("./routes/gemini");


const app = express();

// ✅ Use environment variable or fallback to local
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/evolve";


console.log("🔑 Loaded ENV:", {
  MONGO_URI: process.env.MONGO_URI ? "✅ Set" : "❌ Missing",
  FRONTEND_URL: process.env.FRONTEND_URL,
  PORT: process.env.PORT,
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(`✅ Connected to MongoDB: ${MONGO_URI.includes("localhost") ? "Local" : "Atlas"}`))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// let isConnected = false;
// async function connectToMongoDB(){
//   try{
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log(`✅ Connected to MongoDB: ${MONGO_URI.includes("localhost") ? "Local" : "Atlas"}`);
//   }catch(error){
//     console.error("❌ MongoDB connection error:", error);
//   }
// }

// //add middleware 

// app.use((req, res, next) => {
//   if(!isConnected){
//     connectToMongoDB().then(() => next());
//   }else{
//     next();
//   }
// } );


// ✅ CORS setup
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:8080",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ✅ Route setup
app.use("/api/problems", problemsRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/gemini", geminiRoutes);

console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY ? "✅ Yes" : "❌ Missing");


app.get("/", (req, res) => {
  res.send("✅ Backend is up and running!");
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// // do not use app.listen()
// module.exports = app;

require("./scheduler");