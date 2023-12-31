import { COOKIE_NAME } from "@/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = -1 // days

export async function POST(request: Request) {
  const body = await request.json();

  const { username } = body

  if (username !== 'admin') {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 },
    )
  }

  // Always check this
  const secret = process.env.JWT_SECRET || ''
  
  const token = sign(
    { username },
    secret,
    { expiresIn: MAX_AGE }
  )

  const serialized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/'
  })

  const respone = {
    message: 'Logout Successfull!'
  }

  return new Response(JSON.stringify(respone), {
    status: 200,
    headers: { 'Set-Cookie': serialized }
  })
}