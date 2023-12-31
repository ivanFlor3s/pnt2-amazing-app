import axios from 'axios'

export const fetchImagesFromNasa = async () => {
  const API_KEY = 'J8rPWR4nzqSIb2xCJpsvl7E3p0rMdrcsqbkZSE3t'
  const result = await axios.get('https://api.nasa.gov/planetary/apod', { params: { count: 10, api_key: API_KEY, thumbs: 'false' } })
  return result.data.filter((image) => {
    return image.media_type == "image"
  });
}
