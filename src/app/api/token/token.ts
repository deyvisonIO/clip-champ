import { createRedisInstance } from "@/lib/db"

const redis = createRedisInstance();

export async function getToken() {
  const token = await redis.get("token");
  return token;
}

export async function refreshToken() {
  const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`, { method: 'POST' });
  const data = await response.json();
  
  await redis.set("token", data.access_token);

  return data;
}
