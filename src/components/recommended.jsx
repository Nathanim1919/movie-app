import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiTwotoneStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Bookmarkicon from "./bookmarkicon";
import LoadingPage from "./loadingPage";

function Recommended() {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setLoading] = useState(false);


  const getRecommended = async function () {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US&page=1"
      );
      const data = await res.json();
      setRecommended(data.results);
      setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    getRecommended();
  },[]);

  return (
    <>
     {isLoading && <LoadingPage/>}
    <Section>
      <h2>Recommended for You</h2>
      <Container>
        {recommended.map((recommande) => (
          
          <NavLink style={{textDecoration:"none"}} to={`/movies/${recommande.id}`}>
            <Card key={recommande.id}>
            {/* <Bookmarkicon/> */}
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
  h2 {
    font-weight: lighter;
    color: #c0c2c4;
    font-size: 1rem;
    border-bottom: 1px solid #382d53;
    padding: 0.4rem;
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
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  max-width: 180px;
  border-radius: 10px;
  transition: background-color .21s ease-in-out;
  &:hover >div{
    transform: translateY(0px);
    opacity: 1;
  }
  img {
    border-radius: 10px;
    width: 100%;
  }
`

const Rating = styled.div`
  margin: 1rem;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: start;
  font-size: .8rem;
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
export default Recommended;
