import { getToken } from "@/app/api/token/token"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken();
  const url = request.nextUrl;
  const game_id = url.searchParams.get('game_id');
  const name = url.searchParams.get('name');
  let data;
  
  if (name && !game_id) {
    data = await getGameByName(name, token);
  } else {
    data = await getGameById(game_id, token);
  }
  return NextResponse.json(data);
}

async function getGameById(game_id: string | null, token: string | null) {
  let data;
  try {
    const response = await fetch(`https://api.twitch.tv/helix/clips?game_id=${game_id}&first=18`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Client-Id": `${process.env.CLIENT_ID}`
      }
    });
    
    

    data = await response.json();
    if (data.error) {
      data = {error: data.message }
    }
  } catch(err: unknown ) {
    console.error(err);
    data = { error: err}; 
  } finally {
    return data;
  }
}

async function getGameByName(name: string | null, token:string | null) {
  let data;
  try {
    const response = await fetch(`https://api.twitch.tv/helix/games?name=${name}`,      {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Client-Id": `${process.env.CLIENT_ID}`
    }
    });

    const data_array = await response.json();
   
    if(data_array.data.length == 0) {
      data = { error: "Not Found" };
    } else {
      data = data_array.data[0];
    }
  } catch (err: unknown) {
    console.error(err);
    data = { error: err};
  } finally {
    return data;
  }
}
