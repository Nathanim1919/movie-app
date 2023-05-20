import React from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi';

function Searchbar() {
  return (
    <SearchBar>
        <FiSearch/>
        <input type="text" placeholder='Search for Movies or TV series' />
    </SearchBar>
  )
}

const SearchBar = styled.div`
    background-color: #101425;
    position: fixed;
    z-index: 2;
    display: flex;
    padding: .1rem 2rem;
    justify-content: space-evenly;
    align-items: center;
    gap: .41rem;
    top: 0;
    color: white;
    margin-left: 5rem;
    width: 100%;

    >*{
        font-size: 1.2rem;
    }

    input{
        font-family: inherit;
        background-color: transparent;
        padding: .41rem;
        border: none;
        width: 100%;
        color: #dad1d1;
        outline: none;
        font-size: 1.1rem;
    }
`

export default Searchbar