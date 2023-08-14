import Header from "./components/Header";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Notifications from "./pages/Notifications";
import Authorization from "./pages/Authorization";
import AppContext from "./context";

import { Route, Routes } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./App.scss";
function App() {
  const movies = [
    "/images/movies/1.png",
    "/images/movies/2.png",
    "/images/movies/3.png",
    "/images/movies/4.png",
    "/images/movies/5.png",
    "/images/movies/6.png",
  ];
  const series = [
    "/images/series/1.png",
    "/images/series/2.png",
    "/images/series/3.png",
    "/images/series/4.png",
    "/images/series/5.png",
    "/images/series/6.png",
  ];
  const genres = [
    {
      name: "/images/genres/1.svg",
      background: "linear-gradient(109.31deg, #FD093F 2.4%, #F383F1 100%)",
    },
    {
      name: "/images/genres/2.svg",
      background: " linear-gradient(114.5deg, #0FFFDA 2.22%, #3CDB77 68.84%)",
    },
    {
      name: "/images/genres/3.svg",
      background: "linear-gradient(109.31deg, #B936FF 2.4%, #57DEDA 100%)",
    },
    {
      name: "/images/genres/4.svg",
      background:
        " linear-gradient(109.31deg, #FD093F 2.4%, #FB1378 2.41%, #FCCB1A 100%)",
    },
    {
      name: "/images/genres/5.svg",
      background: " linear-gradient(110.16deg, #13547A 2.37%, #80D0C7 96.77%)",
    },
    {
      name: "/images/genres/6.svg",
      background: " linear-gradient(109.93deg, #FFF77B 2.37%, #FFBF42 50%)",
    },
    {
      name: "/images/genres/7.svg",
      background:
        " linear-gradient(109.31deg, #1FA2FF 2.4%, #1FA2FF 2.41%, #1F535C 97.46%)",
    },
    {
      name: "/images/genres/8.svg",
      background: "linear-gradient(109.31deg, #FD093F 2.4%, #F383F1 100%)",
    },
  ];

  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.get("/");
  //   }
  //   fetchData();
  // }, []);
  return (
    <AppContext.Provider value={{ movies, series, genres }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TVShows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/authorize" element={<Authorization />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
