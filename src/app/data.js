export async function fetchNews() {
    const API_URI = "https://newsapi.org/v2/top-headlines?country=us"
    const API_KEY = "0ef04c92b70348a8aff3ed808cf7af6e"

    try {
        const response = await fetch(`${API_URI}&apiKey=${API_KEY}`)
        if (!response.ok)
            throw new Error("Wrong or empty news API data.")
        return response.json()
    } catch (error) {
        console.error(`Data processing error: ${error.message}`)
        throw new Error("Failed to fetch API data.")
    }
}