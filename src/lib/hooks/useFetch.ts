export async function useFetch(URL: string) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
    
  } catch (err: unknown) {
    console.error(err);
  }
}
