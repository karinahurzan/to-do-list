import { model, Schema } from 'mongoose';

const toDoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      enum: ['done', 'undone'],
      default: 'undone',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ToDoCollection = model('todos', toDoSchema);
