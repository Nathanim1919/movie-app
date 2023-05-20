import React from 'react'
import styled from 'styled-components'

function Loading() {
  return (
    <div>
        <Outside>
            <Inside>

            </Inside>
        </Outside>
    </div>
  )
}

const Outside = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    background-color: red;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: translate(-50%,-50%);
`
const Inside = styled.div`
    width: 10px;
    height: 10px;
    background-color: gold;
    position: absolute;
    border-radius: 50%;
    z-index: 3;
    animation:animate 500ms linear infinite;
`

export default Loading