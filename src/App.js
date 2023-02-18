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
// 46ea2511c8d730afd23a99dce35cd33a

function App() {
  
  return (
    <Container className="App">
      <Navbar />
      <Main>
        <Searchbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Moviedetailpage />} />
          <Route path="/movies/:id/play" element={<MovieVideo />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<Tvseriesdetailpage />} />
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
