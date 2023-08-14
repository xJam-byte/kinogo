import HeaderBottom from "../components/HeaderBottom";
import React from "react";
import AppContext from "../context";

const Home = () => {
  const { movies, series, genres } = React.useContext(AppContext);
  return (
    <div className="homePage">
      <HeaderBottom />

      <div className="main_lists">
        <h3 className="trending_title">Trending TV Shows &#5171;</h3>
        <div className="block t_shows">
          {series.map((s, index) => (
            <div key={index} className="serie">
              <img src={s} alt="" />
            </div>
          ))}
        </div>
        <h3 className="trending_title">Trending Movies &#5171;</h3>
        <div className="block t_movies">
          {movies.map((movie, index) => (
            <div key={index} className="movie">
              <img width={206} height={309} src={movie} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="genres">
        <h3 className="trending_title">Popular Genres &#5171;</h3>
        <div className="block genres_block">
          {genres.map((genre, index) => (
            <div
              style={{ background: genre.background }}
              key={index}
              className="genre"
            >
              <img width={126} height={108} src={genre.name} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="actors">
        <h3 style={{ width: "455px" }} className="trending_title">
          Popular Actors & Directors &#5171;
        </h3>
        <div className="block genres_block">{}</div>
      </div>
    </div>
  );
};

export default Home;
