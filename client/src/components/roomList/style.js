import styled from 'styled-components';

export const Wrap = styled.section`
    display: flex;
    width: 30%;
    height: 60%;
    margin: 30px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-image: -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%, .1) 7.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   4%, hsla(0,0%,  0%,.03) 4.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
    linear-gradient(180deg, hsl(0,0%,78%) 0%, hsl(0,0%,90%) 47%, hsl(0,0%,78%) 53%, hsl(0,0%,70%)100%)
  ;
    background-size: 14% 100%;
    box-shadow: inset -5px 5px 10px 0px rgba(255,255,255,1), inset 5px -5px 10px 0px rgba(0,0,0,.5);
  -webkit-box-shadow: inset -5px 5px 10px 0px rgba(255,255,255,1), inset 5px -5px 10px 0px rgba(0,0,0,.5);
  -moz-box-shadow: inset -5px 5px 10px 0px rgba(255,255,255,1), inset 5px -5px 10px 0px rgba(0,0,0,.5);
`;

export const Line = styled.p`
    margin: 0;

`;

export const StyledA = styled.div`
    text-decoration: none;
    color: black;
    height: 50px;
    border: 1px solid ;
    display: flex;
    justify-content: space-around;
    &:hover{
        cursor: pointer;
    }
`;

export const NavLink = styled.div`

`;


export const Title = styled.h3`
  text-align: center;
  margin: 0;
  line-height: 40px;
  font-size: 1.1em;
  margin-bottom: 20px;
  width: 100%;
  font-family: Pixel;
  border-radius: 0 0 15px 15px;
  background: radial-gradient(circle, rgba(83,83,83,1) 0%, rgba(73,73,73,1) 25%, rgba(68,68,68,1) 50%, rgba(48,48,48,1) 90%);
  box-shadow: inset -2px 2px 5px 0px rgba(255,255,255,.5), inset 2px -2px 5px 0px rgba(0,0,0,.5);
  -webkit-box-shadow: inset -2px 2px 5px 0px rgba(255,255,255,.5), inset 2px -2px 5px 0px rgba(0,0,0,.5);
  -moz-box-shadow: inset -2px 2px 5px 0px rgba(255,255,255,.5), inset 2px -2px 5px 0px rgba(0,0,0,.5);
`;