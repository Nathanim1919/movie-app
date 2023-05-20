import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { MdRemoveFromQueue } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { RiMovieFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";

function Tvseriesdetailpage() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const getDetail = async function (id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`
    );
    const data = await res.json();
    setDetails(data);
  };

  const getEpsodies = async (id, number) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${number}?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`
    );
    const data = await res.json();
    setEpisodes(data.episodes);
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <Container>
      <Back>
        <NavLink to={'/series'}>
          <BiArrowBack />
        </NavLink>
      </Back>
      <ImageCard>
        <Image>
          <img
            src={`https://image.tmdb.org/t/p/w185/${details.poster_path}`}
            alt=""
          />
        </Image>

        <Content>
          <h2>{details.name}</h2>
          <p>{details.overview}</p>
        </Content>
      </ImageCard>

      <Overview>
        <Header>
          <h2>{details.name}</h2>
          <p>{details.tagline}</p>
        </Header>

        <AllSeasons>
          {details.seasons &&
            details.seasons.map((season) => (
              <Seasons onClick={() => getEpsodies(id, season.season_number)}>
                <NavLink>
                  <div>
                    <MdRemoveFromQueue />
                    <p>Season {season.season_number}</p>
                  </div>
                  <BsChevronDown />
                </NavLink>
                {episodes.map(
                  (episode) =>
                    season.season_number == episode.season_number && (
                      <NavLink
                        to={`/series/${id}/${episode.season_number}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Episode>
                          <RiMovieFill /> {episode.name}
                        </Episode>
                      </NavLink>
                    )
                )}
              </Seasons>
            ))}
        </AllSeasons>
      </Overview>
    </Container>
  );
}

const Back = styled.div`
  position: absolute;
  color: white;
  z-index: 3;
  top: 2rem;
  left: 1.3rem;
  font-size: 1.42rem;

  >a{
    color: white;
    text-decoration: none;
  }
`;

const Episode = styled.div`
  transition: all 0.21s linear;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
  margin: 0.01rem;
  padding: 0.5rem;
  color: #d2d0d0;

  &:hover {
    background-color: #d70a0a;
    transform: translateX(20px);
    text-shadow: 0 10px 10px #333;
  }
`;
const Overview = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  overflow: hidden;
  padding: 1rem 3rem;
  padding-right: 5rem;
  background-color: #01001d;
  color: #333;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 2rem;
  height: 100vh;
  justify-content: space-around;
`;

const Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgb(61, 59, 59);
  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    color: #6e7071;
  }

  h2 {
    color: #d0cbcb;
    margin-bottom: 0.3rem;
  }
`;
const ImageCard = styled.div`
  height: 85%;
  color: white;
  position: relative;
`;

const Image = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: -3.5rem;
  background: linear-gradient(#00000024, #000000e9, #000);
  width: 100%;
  height: 111%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  > * {
    margin-top: 0;
    margin-bottom: 0;
    padding: 1rem;
  }

  h2 {
    align-self: flex-start;
    padding-bottom: 0;
    color: #878080;
  }

  P {
    color: #5c5959;
    font-size: 0.8rem;
  }
`;

const AllSeasons = styled.div`
  padding: 0.3rem 1rem;
  overflow: scroll;
  height: 82vh;
`;

const Seasons = styled.div`
  overflow: hidden;
  margin-top: 0.51rem;
  display: flex;
  flex-direction: column;
  background-color: #041220;
  color: #eee;
  cursor: pointer;

  > p {
    font-size: 0.9rem;
    color: #efe7e7;
    width: 80%;
    padding: 0.6rem;
    /* display: none; */
  }

  a:first-of-type {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    box-shadow: 0 10px 10px #0000001f;
    background-color: #061c33;

    &:hover {
      background-color: #571010;
    }

    > * {
      margin: 0 1rem;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;
export default Tvseriesdetailpage;
