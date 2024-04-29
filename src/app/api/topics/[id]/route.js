import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import { connect } from "http2";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
