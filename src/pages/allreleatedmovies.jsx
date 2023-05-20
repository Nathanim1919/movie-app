import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { CgClose } from "react-icons/cg";

function Allreleatedmovies(props) {
  console.log(props.movie);
  return (
    <Section
      style={{
        display: `${props.active ? "grid" : "none"}`,
      }}
    >
      <NavLink onClick={() => props.closePage()}>
        <CgClose />
      </NavLink>
      <Original>
        <div>
          <h3>{props.movie.title}</h3>
          <p>{props.movie.overview}</p>
        </div>
      </Original>

      <RelatedMovies>
        <h2>Related movies</h2>
        <div>
          {props.data != [] &&
            props.data.map((item) => (
              <NavLink
                key={item.id}
                to={`/movies/${item.id}`}
                onClick={() => props.closePage()}
              >
                <Card>
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  />
                  <h5>{item.title}</h5>
                </Card>
              </NavLink>
            ))}
          {props.data == [] && <h1>Sorry we cant find related movies</h1>}
        </div>
      </RelatedMovies>
    </Section>
  );
}

const Section = styled.div`
  background-color: rgba(0, 0, 0, 0.73);
  top: 2%;
  left: 1%;
  width: 98%;
  height: 98%;
  margin: auto;
  position: fixed;
  color: white;
  z-index: 20;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;

  > a {
    position: absolute;
    color: white;
    top: 1rem;
    right: 1rem;
  }
`;

const Original = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(88, 87, 87, 0.5);

  div:nth-child(1) {
    p {
      font-size: .9rem;
      color: rgba(212, 208, 208, 0.4);
    }
  }
`;

const RelatedMovies = styled.div`
  position: relative;
  padding: 2rem;
  overflow: auto;
  margin: auto;
  height: 100%;
  
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  h5 {
    position: absolute;
    color: rgb(255, 255, 255);
    font-weight: lighter;
    bottom: 0rem;
    width: 100%;
    padding: 0.51rem;
    display: grid;
    align-items: end;
    height: 10%;
    background-color: #0000009b;
  }
`;

export default Allreleatedmovies;
