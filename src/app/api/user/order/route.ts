import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import User from "@/models/user.model";
import Order from "@/models/order.model";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const { userId, items, totalAmount, paymentMethod, address } =
      await req.json();

    // Validate required fields
    if (!userId || !items || !totalAmount || !paymentMethod || !address) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Create new order
    const newOrder = await Order.create({
      user: userId,
      items,
      totalAmount,
      paymentMethod,
      address,
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { message: `Failed to create order: ${error.message}` },
      { status: 500 }
    );
  }
}
