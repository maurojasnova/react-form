import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log("data: ", data)
  const { name, email, message } = data

  return NextResponse.json({ name, email, message })
}