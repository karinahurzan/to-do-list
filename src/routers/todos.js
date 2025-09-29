import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllTodosController,
  createTodoController,
  deleteTodoController,
  updateTodoController,
} from '../controllers/todos.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createTodoSchema, updateTodoSchema } from '../validation/todos.js';

const router = Router();

router.get('/todos', ctrlWrapper(getAllTodosController));

router.post(
  '/todos',
  validateBody(createTodoSchema),
  ctrlWrapper(createTodoController),
);

router.delete('/todos/:todoId', ctrlWrapper(deleteTodoController));

router.patch(
  '/todos/:todoId',
  validateBody(updateTodoSchema),
  ctrlWrapper(updateTodoController),
);

export default router;
