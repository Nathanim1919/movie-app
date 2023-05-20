import React from "react";
import {
  MdOutlineMovieCreation,
  MdLocalMovies,
  MdRemoveFromQueue,
} from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { BsBookmark } from "react-icons/bs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <MdOutlineMovieCreation />
      <div>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <TiThSmall />
        </NavLink>
        <NavLink to={'/movies'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <MdLocalMovies />
        </NavLink>
        <NavLink to={'/series'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <MdRemoveFromQueue />
        </NavLink>
        <NavLink to={'/bookmarks'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <BsBookmark />
        </NavLink>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 3;
  background-color: #2c1f3b;
  height: 100vh;
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 4rem;
  font-size: 2rem;
  color: red;
  padding: 1.5rem;
  border-radius: 1rem;

  a{
    color:  #969399;

    &:hover{
      color: gold;
    }
}
a.active{
  color: gold;
} 


  div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    gap: 2rem;
    color: #969399;
  }
`;

export default Navbar;
