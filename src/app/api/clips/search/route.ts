import { getClips } from "@/lib/getClips";
import { NextResponse } from "next/server";

export async function GET() {
  const clips = await getClips();

  return NextResponse.json({ clips });
}
