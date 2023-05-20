import React, { Suspense } from "react";
import styled from "styled-components";
const Trending = React.lazy(()=>import('../components/trending'))
const Recommended = React.lazy(() => import("../components/recommended"));

function Homepage(props) {
  return (
    <Home>
      <Suspense fallback={<div>Loading....</div>}>
        <Trending />
        <Recommended />
      </Suspense>
    </Home>
  );
}

const Home = styled.div`
  position: relative;
  color: white;
  margin-top: 1.5rem;
  margin-left: 7%;
  padding: .1rem;
`;
export default Homepage;
