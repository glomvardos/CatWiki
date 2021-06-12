export async function getBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'X-API-KEY': '98c49160-f776-4bb1-8c9e-1e37287c0537',
    },
  })

  const data = await response.json()

  return data
}
