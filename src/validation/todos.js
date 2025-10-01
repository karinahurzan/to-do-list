import Joi from 'joi';

const todoMessage = {
  'string.base': 'Todo must be a string',
  'string.empty': 'Todo cannot be empty',
  'string.min': 'Todo must be at least 3 characters',
  'string.max': 'Todo must be at most 256 characters',
  'any.required': 'Todo is required',
};

const priorityMessage = {
  'number.base': 'Priority must be a number',
  'number.min': 'Priority must be at least 1',
  'number.max': 'Priority must be at most 10',
};

const statusMessage = {
  'any.only': 'Status must be either "done" or "undone"',
};

export const createTodoSchema = Joi.object({
  todo: Joi.string().min(3).max(256).required().messages(todoMessage),
  priority: Joi.number().min(1).max(10).messages(priorityMessage),
  status: Joi.string().valid('done', 'undone').messages(statusMessage),
});

export const updateTodoSchema = Joi.object({
  todo: Joi.string().min(3).max(256).messages(todoMessage),
  priority: Joi.number().min(1).max(10).messages(priorityMessage),
  status: Joi.string().valid('done', 'undone').messages(statusMessage),
});
