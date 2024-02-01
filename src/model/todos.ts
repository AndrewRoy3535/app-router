import { Document, Schema, model, models } from "mongoose";

interface Todo extends Document {
  todo: string;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema = new Schema<Todo>(
  {
    todo: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
