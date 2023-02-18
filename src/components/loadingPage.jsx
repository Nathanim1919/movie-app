import React from 'react'
import styled from 'styled-components';
import './loader.css';

function LoadingPage() {
  return (
    <Container>
        <div className='outer'>
            <div className='inner'></div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    background-color: transparent;
    display: grid;
    place-items: center;
    padding: 3rem;

    .outer{
        position: relative;
        background-color: #26067e62;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        animation: load1 .31s infinite alternate;

        .inner{
            animation: load .31s infinite alternate;
            position: relative;
            background-color: #0b1eb18e;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
`

export default LoadingPage;