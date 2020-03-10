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

export const StyledTitle = styled.div`
    font-family: TextSF, Arial;
    margin-top: 200px;
    font-size: 5rem;
    outline: none;
    color: red;
`;

export const StyleButton = styled.button `
    border: 1px solid white;
    font-family: TextSF, Arial;
    color: red;
    font-size: 3rem;
    border: 3px solid black;
    margin-bottom: 250px;
    max-width: 500px;
    background: transparent;
    cursor: pointer;
    border: 1px solid silver;
    border-radius: 50px;
    &:hover{
        color: black;
        background-color: white;
        animation: ${grossir} .5s infinite alternate linear;
    }
`

export const Wrap = styled.div`
    display: flex;
    margin: 0 0 0 85px;
    flex-direction: column;
    height: 98vh;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    align-self: center;
`

export const Background = styled.div`
    background: silver;
    position: absolute;
	  width: 100%;
    height: 100%;
    background-size: cover;
    animation: ${zoom} 50s infinite alternate linear;
    z-index: -10;
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