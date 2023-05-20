import Searchbar from "./components/searchbar";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Moviedetailpage from "./pages/moviedetailpage";
import Tvseriesdetailpage from "./pages/tvseriesdetailpage";
import MovieVideo from "./components/movieVideo";
import SeriesPlayingPage from "./pages/seriesPlayingPage";
import { useState } from "react";
// 46ea2511c8d730afd23a99dce35cd33a

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  


  const getMovie = async (id) =>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`);
      const res = await data.json();
      let myBookmark = bookmarks;
      setBookmarks([...myBookmark,res]);
  }

  return (
    <Container className="App">
      <Navbar />
      <Main>
        <Searchbar />
        <Routes>
          <Route path="/" element={<Homepage bookmark = {bookmarks} setBookmarks = {setBookmarks}/>} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/movies" element={<Movies bookmark = {bookmarks} setBookmarks = {setBookmarks}/>} />
          <Route path="/movies/:id" element={<Moviedetailpage />} />
          <Route path="/movies/:id/play" element={<MovieVideo />} />
          <Route path="/series" element={<Series bookmark = {bookmarks} setBookmarks = {setBookmarks} />} />
          <Route path="/series/:id" element={<Tvseriesdetailpage />} />
          <Route path="/series/:id/:snumber" element={<SeriesPlayingPage />} />
          <Route path="/series/:id/:snumber" element={<SeriesPlayingPage />} />
        </Routes>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 6% 1fr;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 97vw;
  height: 100%;
`;
export default App;
