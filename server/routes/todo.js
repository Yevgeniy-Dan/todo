const express = require("express");

const {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
} = require("../controllers/todo");

const { body } = require("express-validator");

const validationArray = [
  body("title").trim().notEmpty().withMessage("Title cannot be empty"),
  body("priority")
    .isInt({ min: 1, max: 10 })
    .withMessage("Priority must be a number between 1 and 10"),
  body("status")
    .optional()
    .isIn(["Done", "Undone"])
    .withMessage('Status must be either "Done" or "Undone'),
];

const router = express.Router();

router.route("/").get(getTodos).post(validationArray, addTodo);
router.route("/:id").delete(removeTodo).put(validationArray, updateTodo);

module.exports = router;
