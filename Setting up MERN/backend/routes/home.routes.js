const express = require("express");
const router = express.Router();

// Import the controllers
const {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/home.controller");

// Routes
router.get("/", getTodo);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
