export const urlBackgroundImage = 'https://image.tmdb.org/t/p/w1280'

export const urlPosterImage = 'https://image.tmdb.org/t/p/w500'

export const urls = {
  baseURL: "https://api.themoviedb.org/3/",

  popularMovies: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  trendingMovies: "https://api.themoviedb.org/3/trending/movie/week?language=en-US",

  popularSeries: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  trendingSeries: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",

  movieDetails: "https://api.themoviedb.org/3/movie/30500?language=en-US",
  movieRecommendations: "https://api.themoviedb.org/3/movie/45000/recommendations?language=en-US&page=1",
  movieVideo: "https://api.themoviedb.org/3/movie/30500/videos?language=en-US",


  seriesDetails: "https://api.themoviedb.org/3/tv/357?language=en-US",
  seriesRecommendations: "https://api.themoviedb.org/3/tv/357/recommendations?language=en-US&page=1",
  serieVideo: "https://api.themoviedb.org/3/tv/series_id/videos?language=en-US",

  multiSearch: "https://api.themoviedb.org/3/search/multi?query=avengers&include_adult=false&language=en-US&page=1"
}