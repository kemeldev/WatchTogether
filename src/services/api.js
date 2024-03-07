const KEY = import.meta.env.VITE_TMDB_KEY;


const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: KEY
  }
}

// Each fetch request is going to receive a different url, and by default it fetches page 1
export const fetchFromApi = async (url, pageParam = 1) => {
  try {
    const response = await fetch(`${url}&page=${pageParam}`, OPTIONS)
    if (!response.ok) {
      throw new Error(`Failed to fetch data from API. Status: ${response.status}`)
    }
    const { results, page } = await response.json()
    // this next cursor is to be used with ReactQuery for infinity queries if needed
    const nextCursor = Number(page + 1)
    return {
      results, nextCursor
    }
  } catch (error) {
    console.error('Error fetching movies:', error)
  }
}
