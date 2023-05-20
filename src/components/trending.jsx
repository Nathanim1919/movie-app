import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { MdLocalMovies, MdRemoveFromQueue } from "react-icons/md";
import Bookmarkicon from "./bookmarkicon";
import { NavLink } from "react-router-dom";
import LoadingPage from "./loadingPage";

function Trending() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getTrending = async function () {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=46ea2511c8d730afd23a99dce35cd33a"
      );
      const data = await res.json();
      setTrending(data.results);
      setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    getTrending();
   
  }, []);

  return (
    <>
     {isLoading && <LoadingPage/>}
    <AllContainer>
      <h2>Trending</h2>
      <Container>
        <Splide
          options={{
            perPage: 4,
            gap: "1rem",
            drag: "free",
            pagination: false,
          }}
        >
          {trending.map((trend) => (
            <SplideSlide>
              <NavLink to={(trend.media_type === "movie")?`/movies/${trend.id}`:`/series/${trend.id}`}>
                <div key={trend.id}>
                  {/* <Bookmarkicon /> */}
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${trend.backdrop_path}`}
                    alt=""
                  />
                  <Content>
                    <MediaType>
                      {trend.release_date && (
                        <p>{trend.release_date.split("-").splice(0, 1)[0]}</p>
                      )}
                      {trend.first_air_date && (
                        <p>{trend.first_air_date.split("-").splice(0, 1)[0]}</p>
                      )}
                      {trend.media_type === "movie" && (
                        <div>
                          <MdLocalMovies /> <p>Movie</p>
                        </div>
                      )}
                      {trend.media_type === "tv" && (
                        <div>
                          <MdRemoveFromQueue /> <p>Tv</p>
                        </div>
                      )}
                    </MediaType>
                    {trend.name && <h3>{trend.name}</h3>}
                    {trend.title && <h3>{trend.title}</h3>}
                  </Content>
                </div>
              </NavLink>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </AllContainer>
</>
  );
}

const Content = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 0;
  padding:2rem 0rem;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)
  );

  > * {
    text-decoration: none;
    margin: 0 1rem;
    margin-bottom:-.61rem;
  }

  h3 {
    font-size: .7rem;
    font-weight: lighter;
    color: #e6e9eb;
  }

  p {
    color: #c0c3c5;
    font-size: .8rem;
  }
`;

const AllContainer = styled.div`
  h2 {
    font-weight: lighter;
    color: #c0c2c4;
    font-size: 1rem;
    border-bottom: 1px solid #382d53;
    padding: 0.4rem;
  }
`;

const MediaType = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  width: 100%;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: start;
  }
`;
const Container = styled.div`
  >div {
    border-radius: 10px;
    min-width: 300px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;

export default Trending;