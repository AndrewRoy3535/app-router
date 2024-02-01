import Todo from "@/model/todos";
import connection from "@/utils/connect";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async () => {
  try {
    await connection();
    const todo = await Todo.find();
    return new NextResponse(JSON.stringify(todo), { status: 200 });
  } catch (error) {
    return new NextResponse("error from get" + error, { status: 500 });
  }
};

export async function POST(req: any) {
  await connection();
  const { todo } = await req.json();
  try {
    const newTodo = new Todo({ todo });
    await newTodo.save();
    return NextResponse.json({ todo: newTodo });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: any, res: any) {
  try {
    await connection();

    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Missing todo ID in request body" });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid todo ID format" });
    }

    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
}
