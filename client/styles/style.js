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

export const BackgroundWrap = styled.div`
  width: 100%;
  position: absolute;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(162,206,244,1) 50%, rgba(0,0,0,1) 100%);
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