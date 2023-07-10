import { NextResponse } from "next/server";
import { getToken, refreshToken } from "./token";

export async function GET() {
  const token = await getToken();
  return NextResponse.json(token); 
}

export async function POST() {
  const token = await refreshToken();
  return NextResponse.json(token);
}
