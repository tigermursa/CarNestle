import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// get api here Read
export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
  } catch (error) {
    data = { result: "error" };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}
