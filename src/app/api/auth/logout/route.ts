import { NextResponse } from "next/server";

export async function POST() {
  // Remove the session cookie by setting it to expire
  return NextResponse.json(
    { message: "Logged out" },
    {
      status: 200,
      headers: {
        "Set-Cookie": "next-auth.session-token=deleted; Path=/; Max-Age=-1; HttpOnly; SameSite=Lax",
      },
    }
  );
}