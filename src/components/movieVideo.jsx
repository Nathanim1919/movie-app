import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function MovieVideo() {
  const { id } = useParams();
  const [movieId, setMovieId] = useState("");

  const getVideo = async function (id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=46ea2511c8d730afd23a99dce35cd33a&language=en-US`
    );
    const data = await res.json();
    setMovieId(data.results[0].key);
  };

  useEffect(() => {
    getVideo(id);
  }, [id]);

  return (
    <Container>
      <iframe
        width="1053"
        height="580"
        src={`https://www.youtube.com/embed/${movieId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 10%;
    left: 10%;
    overflow: hidden;
`

export default MovieVideo;
