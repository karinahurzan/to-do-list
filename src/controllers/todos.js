import createHttpError from 'http-errors';
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../services.js/todos.js';
import { parseFilteredParams } from '../utils/parseFilterParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getAllTodosController = async (req, res) => {
  const { sortBy, sortOrder } = parseSortParams(req.query);
  console.log(sortBy, sortOrder);

  const filter = parseFilteredParams(req.query);

  const todos = await getAllTodos({
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: todos,
  });
};

export const createTodoController = async (req, res) => {
  const todo = await createTodo(req.body);
  console.log(todo);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: todo,
  });
};

export const deleteTodoController = async (req, res, next) => {
  const { todoId } = req.params;

  const todo = await deleteTodo(todoId);

  if (!todo) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.status(204).end();
};

export const updateTodoController = async (req, res, next) => {
  const { todoId } = req.params;

  const result = await updateTodo(todoId, req.body);

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.todo,
  });
};
