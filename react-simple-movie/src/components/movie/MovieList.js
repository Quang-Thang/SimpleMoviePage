import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=43df8bc2d3ccd1e3d6b7b34219b271c9
// https://api.themoviedb.org/3/movie/top_rated?api_key=43df8bc2d3ccd1e3d6b7b34219b271c9
// https://api.themoviedb.org/3/movie/popular?api_key=43df8bc2d3ccd1e3d6b7b34219b271c9
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
