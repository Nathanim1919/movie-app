import React from "react";
import { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Bookmarkicon from "../components/bookmarkicon";
import LoadingPage from "../components/loadingPage";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getMovies = async function () {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US&page=1"
    );
    const data = await res.json();
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return (
    <>
      {isLoading && <LoadingPage />}
      <Section>
        <h2>Latest Movies</h2>
        <Container>
          {movies.map((recommande) => (
            <NavLink
              to={`/movies/${recommande.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card key={recommande.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${recommande.poster_path}`}
                  alt=""
                />

                <Wrapper>
                  <Rating>
                    <p>{recommande.release_date.split("-").splice(0, 1)[0]}</p>
                    <div>
                      <AiTwotoneStar style={{ color: "gold" }} />
                      <p>{recommande.vote_average}</p>
                    </div>
                  </Rating>
                  <h3>{recommande.title.split("").splice(0, 15).join("")}</h3>
                </Wrapper>
              </Card>
            </NavLink>
          ))}
        </Container>
      </Section>
    </>
  );
}

const Section = styled.div`
  padding: 3rem;
  padding-left: 7rem;
  h2 {
    font-weight: lighter;
    color: #c0c2c4;
  }
`;
const Wrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  h3 {
    margin-top: -1rem;
    margin-bottom: 0;
    font-weight: 100;
    font-size: 0.81rem;
    color: #dee1e4;
    padding: 1rem;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
`;

const Card = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 10px;
  transition: background-color 0.21s ease-in-out;
  &:hover {
    background-color: #1f1e35;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.14);
  }
  img {
    border-radius: 10px;
    width: 100%;
  }
`;

const Rating = styled.div`
  margin: 1rem;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: start;
  font-size: 0.8rem;
  align-items: center;
  color: #aeb0b3;
  gap: 5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Movies;