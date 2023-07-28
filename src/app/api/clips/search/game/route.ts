import { getToken } from "@/app/api/token/token"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken();
  const url = request.nextUrl;
  const game_id = url.searchParams.get('game_id');
  let data;

  try {
    const response = await fetch(`https://api.twitch.tv/helix/clips?game_id=${game_id}&first=18`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Client-Id": `${process.env.CLIENT_ID}`
      }
    });
    
    data = await response.json();

  } catch(err: unknown ) {
    console.error(err);
    data = { error: err}; 
  } finally {
    return NextResponse.json(data);
  }

}
