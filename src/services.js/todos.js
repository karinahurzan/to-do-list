import { SORT_ORDER } from '../constants/index.js';
import { ToDoCollection } from '../db/models/todo.js';

export const getAllTodos = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = 'priority',
  filter = {},
}) => {
  const query = ToDoCollection.find();

  if (filter.priority !== undefined) {
    query.where('priority').equals(filter.priority);
  }

  if (filter.statusType) {
    query.where('status').equals(filter.statusType);
  }

  query.sort({ [sortBy]: sortOrder === SORT_ORDER.ASC ? 1 : -1 });

  const todos = await query.exec();

  return todos;
};

export const createTodo = async (payload) => {
  const todo = await ToDoCollection.create(payload);
  console.log(todo);

  return todo;
};

export const deleteTodo = async (todoId) => {
  const todo = await ToDoCollection.findOneAndDelete({
    _id: todoId,
  });
  return todo;
};

export const updateTodo = async (todoId, payload, options = {}) => {
  const rawResult = await ToDoCollection.findOneAndUpdate(
    { _id: todoId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return;

  return {
    todo: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
