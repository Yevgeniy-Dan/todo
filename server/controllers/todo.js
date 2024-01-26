const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const Todo = require("../models/todo");

// @desc    Get todos
// @route   GET /api/todos
// @access  Public
exports.getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json(todos);
});

// @desc    Add todo
// @route   POST /api/todos
// @access  Public
exports.addTodo = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(JSON.stringify(errors.array()));
    error.statusCode = 422;
    throw error;
  }

  const { title, priority } = req.body;

  if (!title || !priority) {
    res.status(400);
    throw new Error("Please add all necessary fileds");
  }

  const todo = new Todo({
    title,
    priority,
  });

  const addedTodo = await todo.save();

  res.status(200).json(addedTodo);
});

// @desc    Remove todo
// @route   DELETE /api/todos/:id
// @access  Public
exports.removeTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  await todo.deleteOne();

  res.status(200).json(todo);
});

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Public
exports.updateTodo = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(
      "Validation failed. Entered data is incorrect.",
      errors
    );
    error.statusCode = 422;
    throw error;
  }

  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
});
