import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { RiMovieFill } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";

function SeriesPlayingPage() {
  const { id, snumber } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [enumber, setEnumber] = useState(1);

  const getViedioId = async (num) =>{
      const data = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${snumber}/episode/${num}/videos?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`);
      const res =await data.json();
      console.log(res.results);
      setEpisode(num);
      setVideoId(res.results[0].key)
  }



  const getEpsodies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${snumber}?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`
    );
    const data = await res.json();
    setEpisodes(data.episodes);
  };


  useEffect(()=>{
    getEpsodies();
  })

  useEffect(() => {
    getViedioId(enumber)
  },[enumber]);

  return (
    <Container>
      <div>
        <h2>Season {snumber}</h2>
        <Episode>
          {episodes.map((episode) => (
            <NavLink
            //   className={({ isActive }) => (isActive ? "playing" : "")}
            onClick={()=>getViedioId(episode.episode_number)}
            >
              <Epis>
                <RiMovieFill />
                {episode.name}
              </Epis>
              <CiPlay1 className="play-icon" />
            </NavLink>
          ))}
        </Episode>
      </div>

      <Player>
        <h1>Video here</h1>
        <div>
          <iframe
            width="653"
            height="380"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </Player>
    </Container>
  );
}
const Player = styled.div`
   place-self: center;
`
const Epis = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.71rem;
  margin: 0.5rem;
  padding: 0.6rem;
  width: 100%;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
  background-color: #1c1a1a;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  color: white;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const Episode = styled.div`
  height: 85vh;
  overflow: auto;
  overflow-x: hidden;
  padding: .41rem 2rem;

  a {
    display: flex;
    background-color: #29292d;
    margin-top: 1rem;
    align-items: center;
    padding: 0 0.4rem;
    color: #a19e9e;
    text-decoration: none;

    &:hover {
      background-color: #363543;
    }
    &.playing {
      background-color: orange;
    }
  }
`;

export default SeriesPlayingPage;
