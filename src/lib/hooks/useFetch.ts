export async function useFetch(URL: string) {
  let data;
  try {
    const response = await fetch(URL);
    data = await response.json();
    
  } catch (err: unknown) {
    console.error(err);
    data = { error: err};
  } finally {
    return data;
  }
}
