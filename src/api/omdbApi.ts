const API_KEY = "66bfcd5";
const BASE_URL = "http://www.omdbapi.com/";

// FUNGSI UNTUK MENCARI FILM BERDASARKAN JUDUL

export const searchMovies = async (query: string) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);

  const data = await response.json();
  return data.Search;
};

// fungsi untuk mendapatkan detail film berdasarkan ID

export const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);

  const data = await response.json();

  return data;
};
