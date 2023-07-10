import { getToken } from "@/app/api/token/token"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken();
  const url = request.nextUrl;
  const game_id = url.searchParams.get('game_id');

  const response = await fetch(`https://api.twitch.tv/helix/clips?game_id=${game_id}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Client-Id": process.env.CLIENT_ID
    }
  })

  const data = await response.json();

  return NextResponse.json(data);
}
