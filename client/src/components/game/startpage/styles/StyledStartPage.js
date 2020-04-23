import styled, {keyframes} from 'styled-components';

// import {TextSF} from './space_age.ttf';
// injectGlobal`
//     @font-face {
//         font-family: 'TextSF';
//         src: url(${TextSF}) format('ttf');
//   }`;

const zoom = keyframes`
from {
	transform:scale(1.1)
  }

  to {
	transform:scale(1.5)
  }
`;

const grossir = keyframes`
from {
	transform:scale(1)
  }

  to {
	transform:scale(1.1)
  }
`;
const topAnimation = keyframes`
  from {
    background-position: 0px -100px,0px 0px;
  }
  to {
    background-position: 0px 0px, 100px 0px;
  }
`;
const bottomAnimation = keyframes`
  from {
    background-position: 0px 0px,0px 0px;
  }
  to {
    background-position: 0px -100px, 100px 0px;
  }
`;



export const StyledTitle = styled.div`
    font-family: Pixel, Arial;
    margin-top: 200px;
    font-size: 5rem;
    outline: none;
    color: red;
`;

export const StyleButton = styled.button `
    border: none;
    font-family: Pixel, Arial;
    color: red;
    font-size: 2rem;
    margin-bottom: 250px;
    max-width: 500px;
    background: transparent;
    cursor: pointer;
    &:hover{
        color: black;
        animation: ${grossir} .5s infinite alternate linear;
    }
`

export const Wrap = styled.div`
    display: flex;
    margin: 0 0 0 0;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    align-self: center;
`

export const Background = styled.div`
    background: linear-gradient(#6084d7 25%, #a2cef4 50%, #a2cef4 50%, #6084d7 100%);  ;
    position: absolute;
	  width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -10;
`;
export const BackgroundWrap = styled.div`
  width: 100%;
    position: absolute;
    background: linear-gradient(#6084d7 25%, #a2cef4 50%, #a2cef4 50%, #6084d7 100%);  ;
  background-size: cover;
  height: 100%;
  position: absolute;
  perspective: 360px;
  perspective-origin: 50% 50%;  
  z-index: -10;
  `;
export const Top = styled.div`
  width: 200%;
  height: 130%;
  position: absolute;
  bottom: -30%;
  left: -50%;
  background-image: -webkit-linear-gradient(#a2cef4 2px, transparent 2px), -webkit-linear-gradient(left, #a2cef4 2px, transparent 2px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(85deg);
  animation: ${topAnimation} 2s infinite linear;
`;
export const Bottom = styled.div`
width: 200%;
  height: 130%;
  position: absolute;
  bottom: -30%;
  left: -50%;
  background-image: -webkit-linear-gradient(#a2cef4 2px, transparent 2px), -webkit-linear-gradient(left, #a2cef4 2px, transparent 2px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(85deg);
  animation: ${bottomAnimation} 2s infinite linear;
`;

export const Credit = styled.div`
    position: absolute;
    left: 85%;
    top: 90%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Name = styled.p`
    font-family: 'TextSF', Arial;
    font-size: 20px;
`;