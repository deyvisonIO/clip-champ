import { getToken } from "@/app/api/token/token"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken();
  const url = request.nextUrl;
  const game_id = url.searchParams.get('game_id');
  const name = url.searchParams.get('name');
  const cursor = url.searchParams.get('cursor');
  const started_at = url.searchParams.get('started_at');
  const ended_at = url.searchParams.get('ended_at');


  let data;
  
  if (name && !game_id) {
    data = await getGameByName(name, token);
  } else {
    data = await getGameById(game_id, token, cursor, started_at, ended_at);
  }
  return NextResponse.json(data);
}

async function getGameById(game_id: string | null, token: string | null, cursor: string | null, started_at: string | null, ended_at: string | null) {
  let data;
  try {
    let URL = `https://api.twitch.tv/helix/clips?game_id=${game_id}&first=18`;
   
    if(started_at) {
      URL += `&started_at=${started_at}`;
    }
    if(ended_at) {
      URL += `&ended_at=${ended_at}`;
    }

    if (cursor) {
      URL += `&after=${cursor}`;
    }
    console.log("URL:", URL)
    const response = await fetch(URL, {
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
    const response = await fetch(`https://api.twitch.tv/helix/games?name=${name}&started_at=${new Date()}`,      {
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
