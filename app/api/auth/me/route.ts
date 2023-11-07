import { NextResponse } from 'next/server';
import { COOKIE_NAME } from '@/constants'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken';

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)

  if (!token) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 },
    )
  }

  const { value } = token
  const secret = process.env.JWT_SECRET || ''

  try {
    verify(value, secret)
    const respone = {
      user: 'Secret User',
      isAuthenticated: true,
    }
    return new Response(JSON.stringify(respone), {
      status: 200,
    })
  } catch (e) {
    return NextResponse.json(
      { message: 'Something went wrong. Please check again!' },
      { status: 400 },
    )
  }
}