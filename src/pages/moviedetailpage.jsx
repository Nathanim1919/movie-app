import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { AiTwotoneStar } from "react-icons/ai";
import Allreleatedmovies from "./allreleatedmovies";
import { BsFillPlayFill } from "react-icons/bs";

function Moviedetailpage() {
  const [moviedetail, setMovieDetail] = useState({});
  const [similars, setSimilar] = useState([]);
  const { id } = useParams();
  const [isActive, setActive] = useState(false);

  const displayRelatedMovies = () => {
    setActive(true);
  };

  const closeRelatedmovies = () => {
    setActive(false);
  };

  const getDetail = async function () {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`
    );
    const data = await res.json();
    setMovieDetail(data);
    // console.log(data);
  };

  const getSimilar = async function () {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US&page=1`
    );
    const data = await res.json();
    setSimilar(data.results);
    console.log(similars);
  };

  useEffect(() => {
    getDetail();
    getSimilar();
  }, [id]);

  return (
    <>
      <Allreleatedmovies
        data={similars}
        movie={moviedetail}
        active={isActive}
        closePage={closeRelatedmovies}
      />
      <Container>
        <ImageCard>
          <img
            src={`https://image.tmdb.org/t/p/w185/${moviedetail.poster_path}`}
            alt=""
          />
          <NavLink to={`/movies/${id}/play`}>
            <button>
              <BsFillPlayFill />
              <h5>Play</h5>
            </button>
          </NavLink>
        </ImageCard>

        <Section>
          <Info>
            <div>
              <h1>{moviedetail.title}</h1>
              <h3>{moviedetail.tagline}</h3>
              {/* <p>{(moviedetail.release_date).split("-").splice(0, 1)[0]}</p> */}
            </div>
            <div>
              <p>{moviedetail.vote_average}</p>
              <AiTwotoneStar style={{ color: "gold" }} />
            </div>
          </Info>
          <Overview>
            <p>{moviedetail.overview}</p>
          </Overview>
          <h2>Related Movies</h2>
          <SliderContainer>
            {similars.splice(0, 3).map((similar) => (
              <NavLink
                to={`/movies/${similar.id}`}
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,.4)",
                }}
                key={similar.id}
              >
                <Card>
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${similar.poster_path}`}
                    alt=""
                  />
                  <div>{similar.title && <h6>{similar.title}</h6>}</div>
                </Card>
              </NavLink>
            ))}
          </SliderContainer>

          <NavLink
            onClick={displayRelatedMovies}
            style={{
              color: "white",
              textDecoration: "none",
              backgroundColor: "rgba(0,0,0,.4)",
              padding: ".5rem",
            }}
          >
            See more
          </NavLink>
        </Section>
      </Container>
    </>
  );
}
const Section = styled.div`
    padding: 0 1rem;
    height: 80vh;

    h2{
      font-weight: 100;
      font-size: .91;
      color: #eee;
    }
`
const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  color: white;
  font-family: 'Rubik', sans-serif;
`;
const Card = styled.div`
  position: relative;
  div {
    position: absolute;
    bottom: -1rem;
    padding-left: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  div:nth-child(1) {
    h1 {
      margin-bottom: 0;
      font-size: 1.3rem;
      font-weight: 300;
    }
    
    h3 {
      font-size: 1rem;
      font-weight: 100;
      margin-top: 0;
      color: #ffffff6c;
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

  }
`;

const Overview = styled.div`
  p {
    font-size: 0.9rem;
    font-weight: 100;
    color: #d5dadf;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  overflow: auto;

`;
const ImageCard = styled.div`
  width: 55%;
  position: relative;

  button {
    position: absolute;
    right: -2rem;
    bottom: 2rem;
    display: flex;
    height: 80px;
    align-items: center;
    padding: 0.21rem 1.82rem;
    font-size: 3rem;
    background-color: red;
    width: 100px;
    border: none;
    color: white;
    outline: none;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    animation: display 2s;
    overflow: hidden;
    transition: all 0.5s linear;

    h5 {
      transform: translateX(100px);
      display: none;
      transition: all 2s ease-in-out;
      animation: display 0.81s;
    }

    &:hover {
      width: 160px;
      border-radius: 5px;
      animation: display 2s;
      h5 {
        transform: translateX(0px);
        display: inline-block;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.41px solid rgba(255, 255, 255, 0.089);

  a {
    color: #656666;
    text-decoration: none;
    padding: 1rem;
  }
`;

export default Moviedetailpage;