import styled, {keyframes} from 'styled-components';

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


export const Wrapped = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const StyledA = styled.a`
    width: 150px;
    padding: 8px 0 2px 0;
    margin: 8px 0 2px 0;
    border-radius: 5px;
    border: none;
    text-align: center;
    color: black;
    background: #666;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease;
    &:hover{
        background: black;
        color: white
    }
`;


export const BackgroundWrap = styled.div`
  width: 100%;
    position: absolute;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(121,10,9,1) 35%, rgba(0,0,0,1) 100%);
  background-size: cover;
  height: 100%;
  perspective: 360px;
  perspective-origin: 50% 50%;  
  z-index: -10;
  `;
export const Top = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: -webkit-linear-gradient(#a2cef4 2px, transparent 2px), -webkit-linear-gradient(left, #a2cef4 2px, transparent 2px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(85deg);
  animation: ${topAnimation} 2s infinite linear;
`;
export const Bottom = styled.div`
width: 100%;
  height: 100%;
  position: absolute;
  background-image: -webkit-linear-gradient(#a2cef4 2px, transparent 2px), -webkit-linear-gradient(left, #a2cef4 2px, transparent 2px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(85deg);
  animation: ${bottomAnimation} 2s infinite linear;
`;

export const StyledTitle = styled.div`
    font-family: Pixel, Arial;
    margin-bottom: 200px;
    font-size: 2rem;
    outline: none;
    color: red;
`;