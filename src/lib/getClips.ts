import { getToken } from "@/app/api/token/token";

 export async function getClips() {
  let data;
  const token = await getToken();
  try {
    const response = await fetch("https://api.twitch.tv/helix/clips", { headers: {
     "Authorization": `Bearer ${token}`,
     "Client-Id": `${process.env.CLIENT_ID}` 
    } });
    data = await response.json();

  } catch (e: unknown) {
    console.error(e);
    data = e;
  } finally {
    return data;
  }
}
