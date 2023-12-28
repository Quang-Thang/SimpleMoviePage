export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "43df8bc2d3ccd1e3d6b7b34219b271c9";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbOriginal = "https://image.tmdb.org/t/p/original";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,

  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,

  getMovieMeta: (movieId, types) =>
    `${tmdbEndpoint}/${movieId}/${types}?api_key=${apiKey}`,

  getOriginal: (path) => `${tmdbOriginal}/${path}`,

  getTrailerVideo: (key) => `https://www.youtube.com/embed/${key}`,
};
