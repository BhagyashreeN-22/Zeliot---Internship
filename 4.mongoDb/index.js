// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(
    "mongodb://admin:qwerty@127.0.0.1:27017/database-1?authSource=admin",
  )
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    jobtitle: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// --------------------
// API Endpoints
// --------------------

// GET all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ status: "success", results: users.length, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Failed to fetch users" });
  }
});

// POST new user
app.post("/api/users", async (req, res) => {
  const { firstName, lastName, email, jobtitle, gender } = req.body;

  if (!firstName || !email || !jobtitle || !gender) {
    return res.status(400).json({ status: "fail", message: "All fields are required!" });
  }

  try {
    const newUser = await User.create({ firstName, lastName, email, jobtitle, gender });
    res.status(201).json({ status: "success", data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Failed to create user", details: err.message });
  }
});

// GET single user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ status: "fail", message: "User not found" });
    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Failed to fetch user" });
  }
});

// PATCH (update) user by ID
app.patch("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body, // dynamic updates
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ status: "fail", message: "User not found" });
    res.status(200).json({ status: "success", data: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Failed to update user" });
  }
});

// DELETE user by ID
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ status: "fail", message: "User not found" });
    res.status(200).json({ status: "success", message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Failed to delete user" });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: "fail", message: "Route not found" });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
