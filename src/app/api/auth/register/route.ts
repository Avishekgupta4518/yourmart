import connectDB from "@/lib/db";
import User from "@/models/user.model";
import { NextResponse,  NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { name, email, password } = await req.json();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }
        const user = new User({ name, email, password });
        await user.save();
        return new Response(
            JSON.stringify({ message: "User created successfully" }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        );
    }
}