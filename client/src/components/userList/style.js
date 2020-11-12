import styled from 'styled-components';

export const Wrap = styled.section`
    display: flex;
    width: 30%;
    height: 60%;
    flex-direction: column;
    border: 2px solid black;
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
    text-align: center;
`;