const express = require("express");

const {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
} = require("../controllers/todo");

const router = express.Router();

router.route("/").get(getTodos).post(addTodo);
router.route("/:id").delete(removeTodo).put(updateTodo);

module.exports = router;
