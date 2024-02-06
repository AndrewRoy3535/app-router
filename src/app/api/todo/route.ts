import Todo from "@/model/todos";
import connection from "@/utils/connect";
import { NextResponse } from "next/server";

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
    const body = await req.json();

    const { _id } = body;

    const id = await Todo.findById(_id);

    if (!id) {
      return NextResponse.json({ message: "Todo does not exists" });
    }
    await id.deleteOne();
    return NextResponse.json({ message: "A todo has been deleted" });
  } catch (error) {
    return NextResponse.json({ message3: error });
  }
}
